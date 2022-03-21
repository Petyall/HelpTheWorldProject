import React, { useRef } from 'react';
import MediaQuery from 'react-responsive'
import 'reactjs-popup/dist/index.css';


const styles = {
    fon: {
        marginTop: '30px',
        width: '1100px',
        backgroundColor: '#FDFDFD',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '12px',
        boxShadow: '0 5px 13px #E3E3E3',
        display: 'flex',
    },

    img: {
        textAlign: 'left',
        height: '200px',
        width: '350px',
        padding: '2%',
        objectFit: 'cover'

    },

    block: {
        width: '680px',
        margin: 0,
        marginTop: '20px'
    },

    name: {
        color: '#0B132A',
        fontSize: '1.5rem',
        fontWeight: '500',
        marginBottom: '10px'
    },

    price: {
        color: '#0B132A',
        fontSize: '1.125rem',
        fontWeight: '500',
        margin: 0,
        marginBottom: '10px'
    },

    info: {
        color: '#3C4454',
        fontSize: '1rem',
        margin: 0,
        marginBottom: '32px',
        marginTop: '20px'
    },

    cena: {
        color: '#F76A08',
        fontSize: '1.125rem',
        fontWeight: '500',
        margin: 0,
    },

    miniimg: {
        marginRight: '12px',
        alignSelf: 'center',
        marginRight: '8px',
        marginBottom: '5px',
    },

    button: {
        border: 'none',
        backgroundColor: '#FFF',
        padding: '0px',
        color: '#4F84EB',
        fontSize: '1rem',
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: 'Rubik',
        marginRight: '-8px'
    },

    pop: {
        textAlign: 'right',
        marginRight: '8px',

    },

    cl: {
        width: '36px'
    },

    cont: {
        display: 'flex',
        flexFlow: 'column',
        marginLeft: '10px'
    },

    popup: {
        textAlign: 'center',
    }
}

const stylessr = {
    dve: {
        display: 'flex',
        marginLeft: '10%',
        marginRight: '10%',
    },

    fon: {
        marginTop: '50px',
        width: '350px',
        backgroundColor: '#FDFDFD',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '12px',
        boxShadow: '0 3px 7px #E3E3E3',
        textAlign: 'center',
    },

    img: {
        margin: '5%',
        marginBottom: '0px',
        width: '90%',
    },

    block: {
        margin: 0,
    },

    name: {
        marginTop: '18px',
        marginBottom: '0px',
        color: '#0B132A',
        fontSize: '1.5rem',
        fontWeight: '500',
        marginBottom: '0px',
        margin: '6%',
        textAlign: 'left',
    },

    price: {
        color: '#0B132A',
        fontSize: '1.125rem',
        fontWeight: '500',
        margin: 0,
        marginBottom: '10px',
        margin: '6%',
        textAlign: 'left',
        marginTop: '10px',
    },

    info: {
        marginTop: '20px',
        color: '#3C4454',
        fontSize: '1rem',
        margin: 0,
        marginBottom: '10px',
        margin: '6%',
        textAlign: 'left',
    },

    cena: {
        color: '#F76A08',
        fontSize: '1.125rem',
        fontWeight: '500',
        margin: 0,
    },

    miniimg: {
        marginRight: '12px',
        alignSelf: 'center',
        marginRight: '8px',
        marginBottom: '5px'
    },

    cnopka: {
        border: 'none',
        fontSize: '1rem',
        color: '#959595',
        width: '250px',
        background: '#4F84EB',
        color: '#F2F2F2',
        padding: '18px 26px',
        display: 'inline',
        borderRadius: '10px',
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'Rubik',
        margin: '5%',
        marginTop: '2%',
    },
}

const stylesmin = {
    dve: {
        display: 'flex',
        marginLeft: '10%',
        marginRight: '10%',
    },

    fon: {
        marginTop: '40px',
        width: '310px',
        backgroundColor: '#FDFDFD',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '12px',
        boxShadow: '0 3px 7px #E3E3E3',
        textAlign: 'center',
    },

    img: {
        margin: '4%',
        marginBottom: '0px',
        width: '90%'
    },

    block: {
        margin: 0,
    },

    name: {
        marginTop: '18px',
        marginBottom: '0px',
        color: '#0B132A',
        fontSize: '1.25rem',
        fontWeight: '500',

        margin: '6%',
        textAlign: 'left',
    },

    price: {
        color: '#0B132A',
        fontSize: '1rem',
        fontWeight: '500',
        margin: 0,
        marginBottom: '10px',
        margin: '6%',
        textAlign: 'left',
        marginTop: '10px',
    },

    info: {
        marginTop: '20px',
        color: '#3C4454',
        fontSize: '0.95rem',
        margin: 0,
        marginBottom: '10px',
        margin: '6%',
        textAlign: 'left',
    },

    cena: {
        color: '#F76A08',
        fontSize: '1rem',
        fontWeight: '500',
        margin: 0,
    },

    miniimg: {
        marginRight: '12px',
        alignSelf: 'center',
        marginRight: '8px',
        marginBottom: '5px'
    },

    cnopka: {
        border: 'none',
        fontSize: '1rem',
        color: '#959595',
        width: '250px',
        background: '#4F84EB',
        color: '#F2F2F2',
        padding: '18px 26px',
        display: 'inline',
        borderRadius: '10px',
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'Rubik',
        margin: '5%',
        marginTop: '2%',
    }
} 

export default function PlitkaPrice(props) {
    let result1 = (props.summa)
    let result2 = (props.summaR)
    let result3 = (100*result2)
    let result4 = (Math.floor(result3/result1))
    let result = (result4*6.8)
    console.log(result1)
    console.log(result2)
    console.log(result3)
    console.log(result)
    return (
        <div>
            <MediaQuery minWidth={1101}>
            <div style={styles.fon}>
                <img style={styles.img} src= {props.img} />
                <div style={styles.block}>
                    <a href={props.link} style={styles.name}>{props.name}</a>
                    <p style={styles.info}>{props.info}</p>
                    <div class="progress">
                        <span class="progress-bar" style={{width: result}}></span>
                    </div>
                    <div class="dlaprogress">
                        <div class="left">
                            <p class="procent">{result4} %</p>
                            <p class="status">ИДЕТ СБОР</p>
                        </div>
                        <div class="right">
                            <p class="summ">{props.summaR} ₽</p>
                            <p class="sobrano">СОБРАНО</p>
                        </div>
                    </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={930} maxWidth={1100}>
            <div style={stylessr.dve}>
            <div style={stylessr.fon}>
                <img style={stylessr.img} src= {props.img} />
                <div style={stylessr.block}>
                    <a href={props.link} style={stylessr.name}>{props.name}</a>
                    <p style={stylessr.info}>{props.info}</p>
                    <div class="progress">
                        <span class="progress-bar" style={{width: '75%'}}></span>
                    </div>
                    <div class="dlaprogress">
                        <div class="left">
                            <p class="procent">75%</p>
                            <p class="status">ИДЕТ СБОР</p>
                        </div>
                        <div class="right">
                            <p class="summ">{props.summa} ₽</p>
                            <p class="sobrano">СОБРАНО</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={stylessr.fon}>
                <img style={stylessr.img} src= {props.img} />
                <div style={stylessr.block}>
                    <a href={props.link} style={stylessr.name}>{props.name}</a>
                    <p style={stylessr.info}>{props.info}</p>
                    <div class="progress">
                        <span class="progress-bar" style={{width: '75%'}}></span>
                    </div>
                    <div class="dlaprogress">
                        <div class="left">
                            <p class="procent">75%</p>
                            <p class="status">ИДЕТ СБОР</p>
                        </div>
                        <div class="right">
                            <p class="summ">{props.summa} ₽</p>
                            <p class="sobrano">СОБРАНО</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={370} maxWidth={929}>
            <div style={stylessr.fon}>
                <img style={stylessr.img} src= {props.img} />
                <div style={stylessr.block}>
                    <a href={props.link} style={stylessr.name}>{props.name}</a>
                    <p style={stylessr.info}>{props.info}</p>
                    <div class="progress">
                        <span class="progress-bar" style={{width: '75%'}}></span>
                    </div>
                    <div class="dlaprogress">
                        <div class="left">
                            <p class="procent">75%</p>
                            <p class="status">ИДЕТ СБОР</p>
                        </div>
                        <div class="right">
                            <p class="summ">{props.summa} ₽</p>
                            <p class="sobrano">СОБРАНО</p>
                        </div>
                    </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={369}>
            <div style={stylesmin.fon}>
                <img style={stylesmin.img} src= {props.img} />
                <div style={stylesmin.block}>
                    <a href={props.link} style={stylesmin.name}>{props.name}</a>
                    <p style={stylesmin.info}>{props.info}</p>
                    <div class="progress">
                        <span class="progress-bar" style={{width: '75%'}}></span>
                    </div>
                    <div class="dlaprogress">
                        <div class="left">
                            <p class="procent">75%</p>
                            <p class="status">ИДЕТ СБОР</p>
                        </div>
                        <div class="right">
                            <p class="summ">{props.summa} ₽</p>
                            <p class="sobrano">СОБРАНО</p>
                        </div>
                    </div>
                </div>
            </div>
            </MediaQuery>
        </div>
    );
}