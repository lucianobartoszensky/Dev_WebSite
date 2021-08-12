import { useState } from 'react'
import emailjs from 'emailjs-com'


export const Contact = (props) => {

  const initialState = {
    name: '', 
    lastname: '',
    email: '', 
    cellphone: '',
    company: '',
    position: '',
    requirement: '', 
    channel: '',
    message: ''
  }

  const [botonSubmitText, setBotonSubmitText] = useState('Send');

  const [botonSubmitColor, setBotonSubmitColor] = useState('#5ca9fb');

  const [botonSubmitGradientColor, setBotonSubmitGradientColor] = useState('linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)');

  const [data, setData] = useState({
    name: '',
    lastname : '',
    email : '',
    cellphone : '',
    company : '',
    position : '',
    requirement : '',
    channel: '',
    message: ''
  });

  //Edita el state de data
  const onChangeInput = e => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const {name, lastname, email, cellphone, company, position, requirement, channel, message} = data

  const handleChange = (e) => {
    const { name, value } = e.target
  }

  const clearState = () => {
    setData({
    name: '',
    lastname : '',
    email : '',
    cellphone : '',
    company : '',
    position : '',
    requirement : '',
    channel: '',
    message: ''})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, lastname, email, cellphone, company, position, requirement, channel, message)
    emailjs
      .sendForm(
        'hostinger', 'hostinger_template', e.target, 'user_zdWYM85ci04bpRK6IFnrF'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          setBotonSubmitText('Sent')
          setBotonSubmitColor('#00FA9A')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
 
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Your information and context will help us to clarify what your need is.
                  If you are interested in any of our services, or want more information about how we could help you, please contact us.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value = {data.name}
                        className='form-control'
                        placeholder='Name *'
                        required
                        onChange={(e) => onChangeInput(e)}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='lastname'
                        name='lastname'
                        value = {data.lastname}
                        className='form-control'
                        placeholder='Last Name *'
                        required
                        onChange={(e) => onChangeInput(e)}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value = {data.email}
                        className='form-control'
                        placeholder='Email Address *'
                        required
                        onChange={(e) => onChangeInput(e)}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='cellphone'
                        name='cellphone'
                        value = {data.cellphone}
                        className='form-control'
                        placeholder='Cellphone *'
                        required
                        pattern = "[0-9+-]{10,}"
                        onChange={(e) => onChangeInput(e)}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='company'
                        name='company'
                        value = {data.company}
                        className='form-control'
                        placeholder='Company *'
                        required
                        onChange={(e) => onChangeInput(e)}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='position'
                        name='position'
                        value = {data.position}
                        className='form-control'
                        placeholder='Position *'
                        required
                        onChange={(e) => onChangeInput(e)}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <select
                      id='requirement'
                      name='requirement'
                      className='form-control'
                      required
                      value = {data.requirement}
                      onChange={(e) => onChangeInput(e)}>
                      <option> Requirement *</option>
                      <option value="advancedAnalytics">Advanced Analytics</option>
                      <option value="digitalTransformation">Digital Transformation</option>
                      <option value="projectManagement">Project Management</option>
                      <option value="sapConsulting">SAP Consulting</option>
                      <option value="staffAugmentation">Staff Augmentation</option>
                      </select>
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <select
                      id='channel'
                      name='channel'
                      className='form-control'
                      value = {data.channel}
                      required
                      onChange={(e) => onChangeInput(e)}>
                      <option> How did you know us? *</option>
                      <option value="directSearch"> Direct Search </option>
                      <option value="google"> Google </option>
                      <option value="linkedIn">LinkedIn</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                      </select>
                      
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>


                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    value = {data.message}
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={(e) => onChangeInput(e)}

                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg' style = {{background: botonSubmitColor, backgroundImage: botonSubmitGradientColor }}>
                  {botonSubmitText}
                </button>
              </form>
            </div>
          </div>
          
          {/* Conctact Information */}
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Information</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone' ></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                   Work with us
                </span>{' '}
                {props.data ? props.data.carrers : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.linkedin : '/'} target="_blank"><i className='fa fa-linkedin'></i></a>
                   </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'} target="_blank"><i className='fa fa-instagram' ></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 BloY. All Rights Reserved.
          </p>
        </div>
        {/* Whatsapp */}
        <div>
        <a href="https://wa.me/543548535757" class="whatsapp_float" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
        </div>
      </div>
    </div>
  )
}
