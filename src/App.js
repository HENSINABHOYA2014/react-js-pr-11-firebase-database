import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import './App.css';
import './Firebase.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';

function App() {
  const tbl = collection(db, 'users');
  const [record, setRecord] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editid, setEditId] = useState('');

  const getUser = async () => {
    const data = await getDocs(tbl);
    const ans = [];
    data.forEach((doc) => {
      ans.push({ ...doc.data(), id: doc.id });
    });
    setRecord(ans);
  };

  const handleSubmit = async () => {
    const insert = await addDoc(tbl, { name: name, email: email });
    if (insert) {
      
    } else {
      
    }
    setName('');
    setEmail('');
    getUser();
  };

  const deleteData = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
    
    getUser();
  };

  const editData = (id, name, email) => {
    setEditId(id);
    setName(name);
    setEmail(email);
  };

  const handleUpdate = async () => {
    const userDoc = doc(db, 'users', editid);
    const newFields = { name: name, email: email };
    await updateDoc(userDoc, newFields);
    
    setEditId('');
    getUser();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <center>
        <table>
          <tbody>
            <tr>
              <td>Name:-</td>
              <td>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Email:-</td>
              <td>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </td>
            </tr>
            <tr>
              {editid ? (
                <td>
                  <input type="button" value="Edit" onClick={() => handleUpdate()} />
                </td>
              ) : (
                <td>
                  <input type="button" value="Submit" onClick={() => handleSubmit()} />
                </td>
              )}
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table border={1} style={{textAlign:'center',color:'white'}} className='tablebg-color'>
          <thead>
            <tr style={{fontSize:'22px'}}>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((val) => {
              const { id, name, email } = val;
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <button onClick={() => deleteData(id)}>Delete</button>&nbsp;&nbsp;&nbsp;
                    <button onClick={() => editData(id, name, email)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default App;
