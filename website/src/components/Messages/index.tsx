import { ChangeEvent, FormEvent, useState } from 'react';
import {
  BsFillChatLeftTextFill,
  BsFillGearFill,
  BsThreeDotsVertical,
  BsFillCursorFill,
  BsFillGridFill
} from 'react-icons/bs'
import { useClient } from '../../hooks/useClient';
import { useMessages } from '../../hooks/useMessages';
import { useSettings } from '../../hooks/useSettings';
import { api } from '../../services/api';
import { Avatar } from '../Avatar';
import { Button } from '../Button';

import styles from './Messages.module.scss';


type MessageType = {
  message: string;
}

export function Messages() {

  const { currentClient, clients } = useClient();
  const { handleShowSettings, isShowSettings } = useSettings();

  const [isDisableButton, setDisableButton] = useState(true);
  const [formData, setFormData] = useState({
    message: ""
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const textlength = event.target.value.length;
    const { name, value } = event.currentTarget;
    setFormData({ message: value });

    if (textlength > 0) {
      setDisableButton(false);

    }
    else {
      setDisableButton(true);
    }

  }
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const config = { headers: { "Content-Type": "application/json" } };
    const { message } = formData;
    const data = JSON.stringify({
      message: message
    })

    await api.post(`messagesSend/${currentClient?.id}`, data, config).finally(() => {
      setFormData({
        message: ""
      })
      setDisableButton(true);
    })

  }

  let isExistSomeClients = Boolean(currentClient)

  return (

    <div className={styles.containerMessages}>
      <header className={styles.headerMessages}>
        <h2 className='title-box'>
          <BsFillChatLeftTextFill />
          Message for {currentClient?.client}
        </h2>

        <div className={styles.messagesActions}>
          {isExistSomeClients &&
            <Button type='button' className='btn-sm' onClick={() => handleShowSettings(!isShowSettings)}>
              <BsFillGearFill />
            </Button>
          }
          <Button type='button' className='btn-sm'>
            <BsThreeDotsVertical />
          </Button>
        </div>

      </header>

      <div className={styles.messages}>
        {/* {currentClient.messages.map((message, index) => {
                    return (
                      <Message key={index} message={message} />
                    )
                  })} */}
      </div>

      <footer className={styles.footer}>
        <form autoComplete='off' onSubmit={handleSubmit} >

          <div className={styles.formGroup}>
            <Avatar icon={currentClient?.icon} className={styles.avatar} />
            <label htmlFor='message' className='sr-only'>Publish message</label>
            <input name='message' id='message' placeholder={`Write publish for name`} onChange={handleInputChange} maxLength={93} value={formData.message} />
            <Button type='button' className='btn-sm'><BsFillGridFill /></Button>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='send' className='sr-only'>Send</label>
            <Button type="submit" id='send' className='btn-sm' disabled={isDisableButton}>
              <BsFillCursorFill />
            </Button>
          </div>
        </form>
      </footer>

    </div>

  );
}