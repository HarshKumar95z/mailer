import React, { useEffect, useState } from 'react'
import Email from './Email'
import useGetAllEmails from '../hooks/useGetAllEmails.js'
import { useSelector } from 'react-redux';

const Emails = () => {
  useGetAllEmails();
  const {emails, searchText} = useSelector(store => store.app);
  const [fiterEmail, setFilterEmail] = useState(emails);

  useEffect(() => {
    const filteredEmail = emails.filter((email)=>{
      return email.subject.toLowerCase().includes(searchText.toLowerCase()) || email.to.toLowerCase().includes(searchText.toLowerCase()) || email.message.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilterEmail(filteredEmail);
  },[searchText, emails])

  return (
    <div>
      {
        fiterEmail && fiterEmail?.map((email)=> <Email key={email._id} email={email}/>)
      }
    </div>
  )
}

export default Emails
