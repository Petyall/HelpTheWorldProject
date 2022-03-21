import React, { useState, useEffect } from 'react';
import PlitkaPrice from './component'
import './infoprice.css'
import testbigimg from './testbigimg.png';
import miniimgg from './image.png';
import MediaQuery from 'react-responsive'
import ImgSeach from './search.png'

const styles = {
    nameblock: {
        fontSize: '2.25rem',
        fontWeight: '500',
        textAlign: 'center',
    },

    vibor: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },

    knopka2: {
        marginLeft: '30px',
        marginRight: '30px',
    }
}
const stylessr = {
    nameblock: {
        fontSize: '2.25rem',
        fontWeight: '500',
        textAlign: 'center',
    },

    vibor: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },

    knopka2: {
        margin: '0',
        marginBottom: '15px',
        marginTop: '15px',
    }
}

const stylesmin = {
    nameblock: {
        fontSize: '1.7rem',
        fontWeight: '500',
        textAlign: 'center',
    },

    vibor: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',

    },

    knopka2: {
        margin: '0',
        marginBottom: '15px',
        marginTop: '15px',
    }
}


function RenderComp(props) {
    const listComp = props.items.map(item => {
        return (
          <PlitkaPrice name={item.name} img={item.Picture} info={item.Decryption} link={item.link} summa={item.Summa} summaR={item.SummaR}/>
        )
      })
    
    return (
      <div>
          {listComp}
      </div>
    )
  }

export default function Price() {
        const [error, setError] = useState(null);
        const [isLoaded, setLoaded] = useState(false);
        const [items, setItems] = useState([]);
        let sum;
        useEffect(() => {
          async function fetchData() {
            const response = await fetch("http://127.0.0.1:8000/Orgs/?format=json")
            const fetchedData = await response.json(response)
            setItems(fetchedData)
            setLoaded(true)
          }
          fetchData()
        }, [])
        const [searchField, setSearchField] = useState("");
        let handleChange
        let filteredPersons
        if (isLoaded) {
            sum = items;
            filteredPersons = sum.filter(
              person => {
                return (
                  person
                  .name
                  .toLowerCase()
                  .includes(searchField.toLowerCase()) ||
                  person
                  .Decryption
                  .toLowerCase()
                  .includes(searchField.toLowerCase())
                );
              }
            );
            handleChange = e => {
              setSearchField(e.target.value);
            };
          }
        if (!isLoaded) {
          return (null)
        }
        else {       
    return (
        <div id = "Price">
            <MediaQuery minWidth={1101}>
                <p style={styles.nameblock}>Выбор категории</p>
                <div className = "BigDiv">
                    <div style={styles.vibor}>
                        <input onChange = {handleChange} type="text" placeholder="Поиск по ключевым словам..." className = "search" />
                        <img className = "searchicon" src={ImgSeach} />
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={659} maxWidth={1100}>
                <p style={stylessr.nameblock}>Выбор категории</p>
                <div style={stylessr.vibor}>
                <input onChange = {handleChange} type="text" placeholder="Поиск по ключевым словам..." className = "search" />
                <img className = "searchicon" src={ImgSeach} />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={659}>
                <p style={stylesmin.nameblock}>Выбор категории</p>
                <div style={stylesmin.vibor}>
                <input onChange = {handleChange} type="text" placeholder="Поиск по ключевым словам..." className = "search" />
                        <img className = "searchicon" src={ImgSeach} />
                </div>
            </MediaQuery>
                <RenderComp items = {filteredPersons}/>
            
        </div>
        
    );
        }
}