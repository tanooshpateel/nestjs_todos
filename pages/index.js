import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import styles from '../styles/styles.module.css';
import { getTasks, addTask } from '../data/tasks';


const Home = () => {
    const [todos, setTodos] = useState(getTasks());
    const [inputText, setInputText] = useState('');
    const [index,setIndex] = useState(3);

    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
            setIndex(index=>index+1);
            const newTodo = {
                id: index,
                text: inputText,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setInputText('');
        }
    };



    // Inside handleEditTodo function
const handleEditTodo = (id, newText, newCompleted) => {
    const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, completed: newCompleted } : todo
    );
    setTodos(updatedTodos);
};


    // const handleEditTodo = (id, newText, newCompleted) => {
    //     setTodos(prevTodos =>
    //         prevTodos.map(todo =>
    //             todo.id === id ? { ...todo, text: newText, completed: newCompleted } : todo
    //         )
    //     );
    // };

    // const handleEditTodo = (id, newText, newCompleted) => {
    //     const updatedTodos = todos.map((todo) =>
    //         todo.id === id ? { ...todo, text: newText, completed: newCompleted } : todo
    //     );
    //     setTodos(updatedTodos);
    // };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Enter a new todo"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button className={styles.btn} onClick={handleAddTodo}>Add Todo</button>
            <TodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
        </div>
    );
};

export default Home;


// import React, { useState } from 'react';
// import TodoList from '../components/TodoList';
// import styles from '../styles/styles.module.css';
// import { getTasks, addTask } from '../data/tasks';


// const Home = () => {
//     const [todos, setTodos] = useState(getTasks());
//     const [inputText, setInputText] = useState('');

//     const handleAddTodo = () => {
//         if (inputText.trim() !== '') {
//             const newTodo = {
//                 id: Date.now(),
//                 text: inputText,
//                 completed: false,
//             };
//             setTodos([...todos, newTodo]);
//             setInputText('');
//         }
//     };



//     const handleEditTodo = (id, newText, newCompleted) => {
//         const updatedTodos = todos.map((todo) =>
//             todo.id === id ? { ...todo, text: newText, completed: newCompleted } : todo
//         );
//         setTodos(updatedTodos);
//     };

//     const handleDeleteTodo = (id) => {
//         const updatedTodos = todos.filter((todo) => todo.id !== id);
//         setTodos(updatedTodos);
//     };

//     return (
//         <div className="container">
//             <h1>Todo List</h1>
//             <input
//                 type="text"
//                 placeholder="Enter a new todo"
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)}
//             />
//             <button className={styles.btn} onClick={handleAddTodo}>Add Todo</button>
//             <TodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
//         </div>
//     );
// };

// export default Home;






// import React, { useState } from 'react';
// import TodoList from '../components/TodoList';
// import styles from '../styles/styles.module.css';
// import { getTasks, addTask } from '../data/tasks';

// const Home = () => {
//     const [todos, setTodos] = useState(getTasks()); // Remove the unnecessary array wrapping
//     const [inputText, setInputText] = useState('');

//     const handleAddTodo = () => {
//         if (inputText.trim() !== '') {
//             const newTodo = {
//                 id: Date.now(),
//                 text: inputText,
//                 completed: false,
//             };
//             setTodos([...todos, newTodo]);
//             setInputText('');
//         }
//     };

//     const handleEditTodo = (id, newText, newCompleted) => {
//         const updatedTodos = todos.map((todo) =>
//             todo.id === id ? { ...todo, text: newText, completed: newCompleted } : todo
//         );
//         setTodos(updatedTodos);
//     };

//     const handleDeleteTodo = (id) => {
//         const updatedTodos = todos.filter((todo) => todo.id !== id);
//         setTodos(updatedTodos);
//     };

//     return (
//         <div className="container">
//             <h1>Todo List</h1>
//             <input
//                 type="text"
//                 placeholder="Enter a new todo"
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)}
//             />
//             <button className={styles.btn} onClick={handleAddTodo}>Add Todo</button>
//             <TodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
//         </div>
//     );
// };

// export default Home;

