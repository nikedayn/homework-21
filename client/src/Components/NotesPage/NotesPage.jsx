//import стилей
import './notes_page.scss';

import React from 'react';
import {useState, useEffect, useRef} from 'react';

//import компонентов
import Section from '../Common/Section/Sectiom';
import NotesList from './NotesList/NotesList';
import Form from './Form/Form';
import Button from './Button/Button';

let formElements = [
    {
        htmlType:'Input',
        type:'title',
        label:'Title',
    },
    {
        htmlType:'Input',
        type:'text',
        label:'Text',
    },
    {
        htmlType:'Select',
        type:'theme',
        label:'Theme',
        answerOptions:[
            {
                value:'black',
                text:'Black'
            },
            {
                value:'white',
                text:'White'
            },
            {
                value:'darkslategray',
                text:'Dark-slate-gray'
            },
            {
                value:'lightyellow',
                text:'Light-yellow'
            }
        ]
    }
];

let timeFormat = (date) => {
    if (date < 10) {
        return `0${date}`;
    }
    else{
        return date;
    }
}

//function componet
const NotesPage = (props) => {
    const [notesStore, createNote] = useState(
        [
            {
                title:'Do homework',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt earum quam exercitationem enim. Nam rerum magni incidunt itaque nulla. Soluta.',
                time: '15:34 | 12.03.2023',
                theme: 'black'
            },
            {
                title:'Dig potatoes',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sint.',
                time: '13:10 | 25.03.2023',
                theme: 'white'
            },
            {
                title:'Do site',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore praesentium earum error tempore id quo sequi eius, veniam cupiditate dicta aliquam at harum veritatis sint optio modi temporibus hic minima excepturi voluptatum reiciendis mollitia doloribus provident! Harum inventore, vel fugit quisquam fuga asperiores deserunt adipisci, iste accusamus deleniti aperiam provident non maiores, voluptas temporibus ipsa. Nobis obcaecati officia, iste tenetur expedita quasi similique, aliquam architecto, aperiam deleniti illum ipsa inventore asperiores. Omnis sequi alias optio eum aliquam ex pariatur, enim perferendis ducimus? Hic quod vel ipsa accusamus error laudantium, natus nulla culpa ratione, qui dignissimos sed laboriosam, aliquam voluptatum sit. Eum deserunt nam rem ex voluptates adipisci, magnam, quo in corporis culpa distinctio qui accusamus dicta eaque alias omnis itaque, dolore corrupti esse maiores aut quas temporibus non. Molestias doloremque ipsum vero est labore, qui corrupti quidem vel odit eos placeat expedita reprehenderit quae ipsam rem optio possimus non, obcaecati laboriosam. Possimus rem voluptates sed consequuntur totam cum illum, eligendi exercitationem quibusdam est, saepe ab, modi id velit beatae quae! Accusantium magni minus assumenda fuga error cumque reprehenderit odit consequatur illum qui, harum commodi maiores! Excepturi, fugiat laborum corporis minus, totam nihil earum amet reprehenderit ad aliquam voluptatem magnam animi!',
                time: '18:52 | 01.04.2023',
                theme: 'darkslategray'
            },
            {
                title:'To water flowers',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ullam asperiores neque enim nihil, iusto recusandae! Consequuntur doloremque architecto fuga provident repellendus cumque asperiores harum nesciunt quasi eos facilis perferendis quibusdam at quo ratione, maxime veniam. Asperiores id neque impedit dicta minus ullam molestias reiciendis voluptas. Similique, animi assumenda? Rerum fuga temporibus voluptates in, aliquid nisi.',
                time: '20:46 | 02.03.2023',
                theme: 'lightyellow'
            }
        ]
    );

    const [newNote, setNewNote] = useState({});

    const refs = {
        btnRef: useRef(null),
        textRef: useRef(null),
        titleRef: useRef(null),
        themeRef: useRef(null)
    }

    useEffect(() => {
        refs.titleRef.current.addEventListener('input', () => {
            console.log(newNote)
            setNewNote({
                ...newNote,
                title: refs.titleRef.current.value
            });
        });

        refs.textRef.current.addEventListener('input', () => {
            console.log(newNote)
            setNewNote({
                ...newNote,
                text: refs.textRef.current.value
            });
        });

        refs.btnRef.current.addEventListener('click', () => {
            console.log('click');

            let dateNow = new Date();
            let time = `${timeFormat(dateNow.getHours())}:${timeFormat(dateNow.getMinutes())}`;
            let date = `${timeFormat(dateNow.getDate())}.${timeFormat(dateNow.getMonth())}.${timeFormat(dateNow.getFullYear())}`;

            createNote([
                ...notesStore,
                {
                    ...newNote,
                    time: `${time} | ${date}`,
                    theme: refs.themeRef.current.value
                }
            ])

            setNewNote({});

            refs.titleRef.current.value = '';
            refs.textRef.current.value = '';
        });
    }, []);

    return(
        <main>
            <Section classForSection='notes_section' key='notes' content={
                <NotesList notes={notesStore}/>
            }/>
            <Section classForSection='form_section' key='form' content={[
                <Form 
                    titleRef={refs.titleRef}
                    textRef={refs.textRef}
                    themeRef={refs.themeRef}
                    formElements={formElements}
                />,
                <Button btnRef={refs.btnRef} btnClass="create_note" btnText="Create Note"/>
            ]}/>
        </main>
    )
};

export default NotesPage;