import React, {useState} from 'react';
import {ContactCollection} from "../api/ContactCollection";
//contact : name,email,imageURL
export const ContactForm = () => {


	const [name,setName] = useState("");
	const [email,setEmail] = useState("");
	const [imageURL,setImageURL] = useState("");
    const SaveContact = () => {
        console.log(name,email,imageURL);
        ContactCollection.insert({name,email,imageURL});
        setName("");
        setEmail("");
        setImageURL("");

	}

    const handleChange = (event) => {

        if(event.target.id == "name")
        {
            setName(event.target.value)
        }
        else if (event.target.id == "email")
        {
            setEmail(event.target.value)
        }
        else if (event.target.id == "imageURL")
        {
            setImageURL(event.target.value)
        }
    }
return(
  <div>
      <form>
      <div>
     	<label htmlFor="name">
     	  Name
     	</label>
     	<input type="text" id="name" value={name} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="email">
          Email
        </label>
        <input type="email" id="email" value={email} onChange={handleChange}  />
       </div>  
       <div>
         <label htmlFor="imageURL">
           ImageURL
          </label>
          <input type="text" id="imageURL" value={imageURL} onChange={handleChange}  />
       </div>
       <div>
        <button type="button" onClick={SaveContact}>
          Save Contact
         </button>
        </div>
    </form>

  </div>
)
}
