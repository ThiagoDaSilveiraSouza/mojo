import React from "react"
import styled from "styled-components"

const MailchimpFormElement = styled.form`
  display: flex !important;
  margin: 5rem 0;
  flex-direction: column;
  padding: 0 !important;
  justify-content: center;
  input,
  textarea {
    font-family: var(--main-font) !important;
    margin: 0 !important;
    border-radius: 0 !important;
  }
  > div {
    width: 100% !important;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    gap: 40px;
    border-radius: none !important;
    .half-input {
      flex: 1 1 200px !important;
    }
    .button-content {
      justify-content: flex-end;
    }
  }
`

const InputContent = styled.div`
  width: 100% !important;
  padding: 0 !important;
  display: flex;
`
const MailchimpTextInput = styled.input`
  width: 100% !important;
`
const MailChimpTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 10px !important;
`
const MailChimpSendButton = styled.input`
  font-size: 17px !important;
  text-transform: uppercase;
  color: white;
  outline: none;
  height: 50px !important;
  width: 160px !important;
  cursor: pointer;
  background: var(--home-color) !important;
`
export const MailchimpForm = () => {
  return (
    <div id='mc_embed_signup'>
      <MailchimpFormElement
        action='https://agenciamojo.us7.list-manage.com/subscribe/post?u=e62d9b039f4c003543ddc970c&amp;id=0d4501937d'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        className='validate'
        target='_blank'
        noValidate
      >
        <div id='mc_embed_signup_scroll'>
          <InputContent className='mc-field-group half-input'>
            <MailchimpTextInput
              type='text'
              defaultValue=''
              name='FNAME'
              className='required'
              id='mce-FNAME'
              placeholder='Nome'
            />
          </InputContent>
          <InputContent className='mc-field-group half-input'>
            <MailchimpTextInput
              type='text'
              name='PHONE'
              className='required'
              defaultValue=''
              id='mce-PHONE'
              placeholder='Telefone'
            />
          </InputContent>
          <InputContent className='mc-field-group'>
            <MailchimpTextInput
              type='email'
              defaultValue=''
              name='EMAIL'
              className='required email'
              id='mce-EMAIL'
              placeholder='Email'
            />
          </InputContent>
          {/* <InputContent className='mc-field-group'>
            <MailchimpTextInput
              type='text'
              defaultValue=''
              name='LNAME'
              className='required'
              id='mce-LNAME'
              placeholder='Sobrenome'
            />
          </InputContent> */}

          <InputContent className='mc-field-group'>
            <MailChimpTextArea
              type='text'
              defaultValue=''
              name='MMERGE3'
              className='required'
              id='mce-MMERGE3'
              placeholder='Mensagem'
            />
          </InputContent>
          <div id='mce-responses' className='clear' style={{ display: "none" }}>
            <div
              className='response'
              id='mce-error-response'
              style={{ display: "none" }}
            ></div>
            <div
              className='response'
              id='mce-success-response'
              style={{ display: "none" }}
            ></div>
          </div>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden='true'
          >
            <input
              type='text'
              name='b_e62d9b039f4c003543ddc970c_0d4501937d'
              tabIndex='-1'
              defaultValue=''
            />
          </div>
          <InputContent className='clear button-content'>
            <MailChimpSendButton
              type='submit'
              defaultValue='Enviar'
              name='subscribe'
              id='mc-embedded-subscribe'
              className='button'
            />
          </InputContent>
        </div>
      </MailchimpFormElement>
    </div>
  )
}
