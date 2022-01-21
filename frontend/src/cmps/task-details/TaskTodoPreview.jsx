import { IoCheckbox } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlineBars } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { MdOutlineAttachment } from "react-icons/md"
import { GoMention } from "react-icons/go"


export function TaskTodoPreview({ todo }) {

    return (<div className='todo-preview' key={todo.id}>
        {/* ICON */}
        {(todo.isDone) ? <IoCheckbox className='checkbox-icon'
            onClick={() => onToggleTodo(todo.id)} />
            : <MdCheckBoxOutlineBlank className='checkbox-icon' onClick={() => onToggleTodo(todo.id)} />}

        {/* TEXT-AREA */}
        <textarea className={`todo-item  ${(todo.isDone) ? 'checked' : ''}`} onClick={() => toggleTextArea(true)} onBlur={() => toggleTextArea(false)} >
            {todo.title}
        </textarea>

        {/* Editing */}
        {isTextAreaOpen && <section className='edit-todo-controllers'>
            <div>
                <button className='save-btn'>Save</button>
                <button className="primary-close-btn">X</button>
            </div>
            <div className='edit-iconts-options'>
                <BiSmile />
                <GoMention />
            </div>
        </section>}
    </div>
    )
}