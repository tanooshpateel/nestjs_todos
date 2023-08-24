// import React, { useState } from 'react';

// const TodoItem = ({ todo, onDelete, onEdit }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedText, setEditedText] = useState(todo.text);

//     const handleEditSave = () => {
//         onEdit(todo.id, editedText);
//         setIsEditing(false);
//     };

//     const handleEditButtonClick = () => {
//         setIsEditing(true);
//         setEditedText(todo.text); // Reset editedText to the original text when editing starts
//     };

//     const handleInputChange = (e) => {
//         setEditedText(e.target.value);
//     };

//     return (
//         <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
//             {isEditing ? (
//                 <>
//                     <input
//                         type="text"
//                         value={editedText}
//                         onChange={handleInputChange}
//                     />
//                     <button onClick={handleEditSave}>Save</button>
//                 </>
//             ) : (
//                 <>
//                     <input
//                         type="checkbox"
//                         checked={todo.completed}
//                         onChange={() => onEdit(todo.id, editedText, !todo.completed)}
//                     />
//                     <span>{todo.text}</span>
//                     <button onClick={handleEditButtonClick}>Edit</button>
//                     <button onClick={() => onDelete(todo.id)}>Delete</button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default TodoItem;





// import React, { useState } from 'react';

// const TodoItem = ({ todo, onDelete, onEdit }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedText, setEditedText] = useState(todo.text);

//     const handleEditSave = () => {
//         onEdit(todo.id, editedText);
//         setIsEditing(false);
//     };

//     return (
//         <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
//             {isEditing ? (
//                 <>
//                     <input
//                         type="text"
//                         value={editedText}
//                         onChange={(e) => setEditedText(e.target.value)}
//                     />
//                     <button onClick={handleEditSave}>Save</button>
//                 </>
//             ) : (
//                 <>
//                     <input
//                         type="checkbox"
//                         checked={todo.completed}
//                         onChange={() => onEdit(todo.id, editedText, !todo.completed)}
//                     />
//                     <span>{editedText}</span>
//                     <button onClick={() => setIsEditing(true)}>Edit</button>
//                     <button onClick={() => onDelete(todo.id)}>Delete</button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default TodoItem;





// import React, { useState } from 'react';

// const TodoItem = ({ todo, onDelete, onEdit }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedText, setEditedText] = useState(todo.text);

//     const handleEditSave = () => {
//         onEdit(todo.id, editedText);
//         setIsEditing(false);
//     };

//     const handleEditButtonClick = () => {
//         setIsEditing(true);
//     };

//     const handleInputChange = (e) => {
//         setEditedText(e.target.value);
//     };

//     return (
//         <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
//             {isEditing ? (
//                 <>
//                     <input
//                         type="text"
//                         value={editedText}
//                         //onChange={handleInputChange}
//                         onChange={(e) => setEditedText(e.target.value)}
//                     />
//                     <button onClick={handleEditSave}>Save</button>
//                 </>
//             ) : (
//                 <>
//                     <input
//                         type="checkbox"
//                         checked={todo.completed}
//                         onChange={() => onEdit(todo.id, editedText, !todo.completed)}
//                     />
//                     <span>{todo.text}</span>
//                     <button onClick={handleEditButtonClick}>Edit</button>
//                     <button onClick={() => onDelete(todo.id)}>Delete</button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default TodoItem;


// import React, { useState } from 'react';

// const TodoItem = ({ todo, onDelete, onEdit }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedText, setEditedText] = useState(todo.text);

//     const handleEditSave = () => {
//         onEdit(todo.id, editedText);
//         setIsEditing(false);
//     };

//     const handleEditButtonClick = () => {
//         setIsEditing(true);
//     };

//     const handleInputChange = (e) => {
//         setEditedText(e.target.value);
//     };

//     return (
//         <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
//             {isEditing ? (
//                 <>
//                     <input
//                         type="text"
//                         value={editedText}
//                         onChange={handleInputChange}  // Use the handleInputChange function here
//                     />
//                     <button onClick={handleEditSave}>Save</button>
//                 </>
//             ) : (
//                 <>
//                     <input
//                         type="checkbox"
//                         checked={todo.completed}
//                         onChange={() => onEdit(todo.id, editedText, !todo.completed)}
//                     />
//                     <span>{todo.text}</span>
//                     <button onClick={handleEditButtonClick}>Edit</button>
//                     <button onClick={() => onDelete(todo.id)}>Delete</button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default TodoItem;


// import React, { useState } from 'react';

// const TodoItem = ({ todo, onDelete, onEdit }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedText, setEditedText] = useState(todo.text);

//     const handleEditSave = () => {
//         onEdit(todo.id, editedText);
//         setIsEditing(false);
//     };

//     return (
//         <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
//             {isEditing ? (
//                 <>
//                     <input
//                         type="text"
//                         value={editedText}
//                         onChange={(e) => setEditedText(e.target.value)}
//                     />
//                     <button onClick={handleEditSave}>Save</button>
//                 </>
//             ) : (
//                 <>
//                     <input
//                         type="checkbox"
//                         checked={todo.completed}
//                         onChange={() => onEdit(todo.id, editedText, !todo.completed)}
//                     />
//                     <span>{editedText}</span>
//                     <button onClick={() => setIsEditing(true)}>Edit</button>
//                     <button onClick={() => onDelete(todo.id)}>Delete</button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default TodoItem;





// import React, { useState } from 'react';

// const TodoItem = ({ todo, onDelete, onEdit }) => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedText, setEditedText] = useState(todo.text);

//     const handleEditSave = () => {
//         onEdit(todo.id, editedText);
//         setIsEditing(false);
//     };

//     return (
//         <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
//             {isEditing ? (
//                 <>
//                     <input
//                         type="text"
//                         value={editedText}
//                         onChange={(e) => setEditedText(e.target.value)}
//                     />
//                     <button onClick={handleEditSave}>Save</button>
//                 </>
//             ) : (
//                 <>
//                     <input
//                         type="checkbox"
//                         checked={todo.completed}
//                         onChange={() => onEdit(todo.id, editedText, !todo.completed)}
//                     />
//                     <span>{editedText}</span>
//                     <button onClick={() => setIsEditing(true)}>Edit</button>
//                     <button onClick={() => onDelete(todo.id)}>Delete</button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default TodoItem;




import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleEditSave = () => {
        onEdit(todo.id, editedText);
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button onClick={handleEditSave}>Save</button>
                </>
            ) : (
                <>
                    <div> {todo.id}</div>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onEdit(todo.id, editedText, !todo.completed)}
                    />
                    <span>{editedText}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default TodoItem;
