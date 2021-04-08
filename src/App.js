import React, {useState, useEffect} from 'react';
import './App.css';
import {Items} from "./components/Items";
import {PostList} from "./components/PostList";
import {CommentsList} from "./components/CommentsList";
import {AlbumsList} from "./components/AlbumsList";
import {PhotosList} from "./components/PhotosList";
import {TodosList} from "./components/TodosList";
import {UsersList} from "./components/UsersList";


function App() {
    const POSTS = 'posts';
    const COMMENTS = 'comments';
    const ALBUMS = 'albums';
    const PHOTOS = 'photos';
    const TODOS = 'todos';
    const USERS = 'users';
    const items = [
        {title: POSTS, click: () => setSelectedItem(POSTS)},
        {title: COMMENTS, click: () => setSelectedItem(COMMENTS)},
        {title: ALBUMS, click: () => setSelectedItem(ALBUMS)},
        {title: PHOTOS, click: () => setSelectedItem(PHOTOS)},
        {title: TODOS, click: () => setSelectedItem(TODOS)},
        {title: USERS, click: () => setSelectedItem(USERS)},
    ]
    const [selectedItem, setSelectedItem] = useState(items[0].title);
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const url = `https://jsonplaceholder.typicode.com/${selectedItem}`;
    const fetchData = async () => {
        setIsLoading(true)
        const response = await fetch(url);
        const data = await response.json();
        setList(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
        }, [selectedItem])


    return (
    <div className="App">
      <Items items={items} selectedItem={selectedItem}/>

        {isLoading ? <h1>LOADING ...</h1> :
            (
                <div>
                    {selectedItem === POSTS && <PostList posts={list}/>}
                    {selectedItem === COMMENTS &&<CommentsList comments={list}/>}
                    {selectedItem === ALBUMS && <AlbumsList albums={list}/>}
                    {selectedItem === PHOTOS && <PhotosList photos={list}/>}
                    {selectedItem === TODOS && <TodosList todos={list}/>}
                    {selectedItem === USERS && <UsersList users={list}/>}
                </div>
        )}

    </div>
  );
}

export default App;

// потрібно створити логіку, яка задовільнить наступні вимоги
// в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users)
// дефолтно обрана таба - пости
// по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
// лише 1 список видимий одночасно
// потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...