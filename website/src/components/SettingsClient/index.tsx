import { ChangeEvent, FormEvent, useState } from 'react';
import { BsXLg, BsCloudArrowDownFill, BsCloudArrowUpFill, BsPlusLg } from 'react-icons/bs'
import { useClient } from '../../hooks/useClient';
import { useSettings } from '../../hooks/useSettings';
import { api } from '../../services/api';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Form } from '../Form';
import { Modal } from '../Modal';
import { ToggleSwitch } from '../ToggleSwitch';

import styles from './SettingsClient.module.scss';

export function SettingsClient() {
  const [isShowModalPublish, setShowModalPublish] = useState(false);
  const [formData, setFormData] = useState({
    publisher: "",
    oos: "2",
    topic: "",
    color: "#FFFFFF"
  });
  const { currentClient, handleDeleteClient } = useClient();
  const { handleShowSettings, publishers, handleDeletePublisher } = useSettings();


  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const config = { headers: { "Content-Type": "application/json" } };

    const { publisher, topic, oos, color } = formData;

    const data = JSON.stringify({
      publisher: publisher,
      topic: topic,
      oos: oos,
      color: color,
      id_client: currentClient?.id
    })
    await api.post("publishers", data, config).finally(() => {
      handleShowModalPublish(false)
      setFormData({
        publisher: "",
        oos: "2",
        topic: "",
        color: "#FFFFFF"
      })
    })


  }



  function handleShowModalPublish(value: boolean) {
    setShowModalPublish(value);
  }

  return (
    <>
      <div className={styles.containerConfig}>
        <div>
          <Button className={styles.btnClose} onClick={() => handleShowSettings(false)}><BsXLg /> </Button>
        </div>
        <header className={styles.headerConfig}>
          <Avatar icon={currentClient?.icon} className={styles.avatar} />
          <h4>{currentClient?.client}</h4>
          <span className={styles.host}>{currentClient?.host}</span>
        </header>

        <section className={styles.boxs}>
          <div className={styles.box}>
            <span>Publish</span>
            <span>{10}</span>
            <span className={styles.pink} ><BsCloudArrowDownFill /></span>
          </div>
          <div className={styles.box}>
            <span>Subscribe</span>
            <span>10</span>
            <span className={styles.yellow} ><BsCloudArrowUpFill /></span>
          </div>
        </section>

        <section className={styles.myPublishers}>
          <header>
            <span> My Publish <span>{publishers.length}</span></span>
            <Button type="button" onClick={() => handleShowModalPublish(true)}> <BsPlusLg /></Button>
          </header>
          <ul>
            {publishers.map((publisher, index) => {
              return (
                <li key={index}>{publisher.publish} <span className={styles.publisherColor} style={{background: publisher.color}}></span> <Button type='button' onClick={() => handleDeletePublisher(publisher.id)}> <BsXLg /></Button></li>
              );
            })}
          </ul>
        </section>

        <section className={styles.myPublishers}>
          <header>
            <span> My Publish <span>{publishers.length}</span></span>
            <Button type="button" onClick={() => handleShowModalPublish(true)}> <BsPlusLg /></Button>
          </header>
          <ul>
            {publishers.map((publisher, index) => {
              return (
                <li key={index}>{publisher.publish} <span className={styles.publisherColor} style={{background: publisher.color}}></span> <Button type='button' onClick={() => handleDeletePublisher(publisher.id)}> <BsXLg /></Button></li>
              );
            })}
          </ul>
        </section>
        <footer className={styles.footerConfig}>
          <ul>
            <li>Add to Favourites <ToggleSwitch /></li>
            <li><Button onClick={() => handleDeleteClient(currentClient!)}>Delete this Client</Button></li>
            <li><Button >Desconect this Client</Button> </li>
          </ul>
        </footer>
      </div>


      <Modal title='Add a new publish topic' subtitle='Here, you can to add a new publish topic' show={isShowModalPublish}>
        <Form autoComplete='off' onSubmit={handleSubmit} handleShowModal={handleShowModalPublish} className={styles.formPublisher}>

          <div className="form-group">
            <label for-id="publisher">Publisher</label>
            <input type="text" name="publisher" id="publish" placeholder="publish" required onChange={handleInputChange} value={formData.publisher}/>
          </div>

          <div className="form-group">
            <label for-id="topic">Topic</label>
            <input type="text" name="topic" id="topic" placeholder="topic" required onChange={handleInputChange} value={formData.topic} />
          </div>

          <div className="form-group">
            <label for-id="oos">Oos</label>
            <select name='oos' onClick={() => handleInputChange} value={formData.oos}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>

          <div className="form-group">
            <label for-id="color">Color</label>
            <input type="color" name="color" id="color" required onChange={handleInputChange} list='presets' value={formData.color} />
            <datalist id='presets'>
              <option value="#ee493a">Red</option>
              <option value="#6acad8">Blue light</option>
              <option value="#6699cc">Purple</option>
              <option value="#FFFFFF">White</option>
              <option value="#000000">Black</option>
            </datalist>
          </div>
        </Form>
      </Modal>
    </>
  );
}