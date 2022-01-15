import { useState, ChangeEvent, FormEvent, ReactNode } from 'react';
import { BsPlusLg, BsServer, BsCheckLg, BsXLg, BsFillAlarmFill, BsFillBugFill, BsFillGeoFill } from 'react-icons/bs';

import { useClient } from '../../hooks/useClient';
import { api } from '../../services/api';
import { Button } from '../Button';
import { Form } from '../Form';
import { Loader } from '../Loader';
import { Modal } from '../Modal';
import { Client } from './client';

import styles from './Clients.module.scss';

const iconsClients = [
  { id: "alarmIcon", value: 1, icon: <BsFillAlarmFill className={styles.icon} /> },
  { id: "bugIcon", value: 2, icon: <BsFillBugFill className= {styles.icon} /> },
  { id: "geoIcon", value: 3, icon: <BsFillGeoFill className= {styles.icon} /> }
]


export function Clients() {

  const { clients } = useClient();
  const [isShowModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    client: "",
    protocol: "",
    username: "",
    password: "",
    host: "",
    icon: 1
  });


  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    setLoading(true);

    event.preventDefault();
    const config = { headers: { "Content-Type": "application/json" } };

    const { client, protocol, host, icon, password, username } = formData;
    const data = JSON.stringify({
      client: client,
      protocol: protocol,
      password: password,
      username: username,
      host: host,
      icon: icon
    });

    await api.post('clients', data, config).finally(() => {
      setLoading(false);
      handleShowModal(false)
      setFormData({
        client: "",
        protocol: "",
        username: "",
        password: "",
        host: "",
        icon: 1
      })
    })

  }
  /* handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;

        this.setState({
            [id]: value
        });
} */
  function handleShowModal(value: boolean) {
    setShowModal(value);
  }

  return (
    <>
      <div className={styles.containerClientes}>
        <header className={styles.clientsHeader}>
          <h2 className='title-box'>
            <BsServer />
            My clients 
          </h2>
          <Button className={styles.btnHeader} onClick={() => handleShowModal(true)}>
            <BsPlusLg />
            <i className='sr-only' >Add client</i>
          </Button>
        </header>

        <div className={styles.clientsContent}>
          {clients.map((client, index) => {
            return (
              <Client client={client} key={index} />
            )
          })}
        </div>
      </div>

      <Modal title='Create MQTT Client' show={isShowModal} subtitle='Please, inform the data corrects, for to create your server'>

        <Form autoComplete='off' onSubmit={handleSubmit} handleShowModal={handleShowModal} className={styles.formClients}>

          <div className="form-group">
            <label for-id="client">Name</label>
            <input type="text" name="client" id="client" placeholder="MQTT Client Name" required maxLength={15} onChange={handleInputChange} value={formData.client} />
          </div>

          <div className="form-group">
            <label for-id="protocol">Protocol</label>
            <input type="text" name="protocol" id="protocol" placeholder="Protocol" required maxLength={15} onChange={handleInputChange} value={formData.protocol} />
          </div>

          <div className="form-group">
            <label for-id="host">Host</label>
            <input type="text" name="host" id="host" placeholder='Host' required maxLength={15} onChange={handleInputChange} value={formData.host} />
          </div>

          <div className="form-group">
            <label for-id="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Username" required onChange={handleInputChange} value={formData.username} />
          </div>

          <div className="form-group">
            <label for-id="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" required onChange={handleInputChange} value={formData.password} />
          </div>



          <div className={styles.formRadios}>
            <label className={styles.formRadiosTitle}>Choice your icon for to use in your client</label>
            {iconsClients.map((icon, index) => {
              return (
                <div key={index} className='form-radio'>
                  <input type="radio" name='icon' id={icon.id} value={icon.value} onChange={() => handleInputChange} />
                  <label htmlFor={icon.id} className={styles.radio}>
                    {icon.icon}
                  </label>
                </div>
              )
            })}
          </div>

        </Form>

        {isLoading && <Loader />}
      </Modal>

    </>
  );
}