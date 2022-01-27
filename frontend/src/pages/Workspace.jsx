import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai';

// Actions
import { onSaveBoard, loadBoards } from '../store/board/board.action';


// Cmps
import { BoardList } from '../cmps/workspace/BoardList.jsx';
import { DynamicActionModal } from '../cmps/dynamic-actions/DynamicActionModal';

export function Workspace() {
    const dispatch = useDispatch();
    const boards = useSelector(state => state.boardModule.boards);
    const [modal, setModal] = useState({ isModalOpen: false, type: null });

    useEffect(async () => {
        try {
            await dispatch(loadBoards());
        } catch (err) {
            console.log('Cannot load boards', err);
        }
    }, []);

    const getStarredBoards = () => {
        return boards.filter(board => board.isStarred);
    };

    const onToggleStarred = (ev, boardId) => {
        ev.preventDefault();
        const board = boards.find(board => board._id === boardId);
        board.isStarred = !board.isStarred;
        dispatch(onSaveBoard(board));
    };

    const toggleModal = ({ event, type, isDetails }) => {
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false });
            return;
        }

        setModal({ isModalOpen: true, type, event, isDetails});
    };

    return (
        <section className="workspace-page">
            <section className="all-boards">
                <div className="content-all-boards">
                    <section className="stared-boards-section">
                        <div className="title-header">
                            <div className="title-header-icon-container">
                                <AiOutlineStar className="header-icon star-icon" />
                            </div>
                            <h3>Starred boards</h3>
                        </div>
                        <div className="primary-boards-container-section">
                            <BoardList boards={getStarredBoards()} onToggleStarred={onToggleStarred} isStarred/>
                        </div>
                    </section>
                    <section className="recent-boards-section">
                        <div className="title-header">
                            <div className="title-header-icon-container">
                                <AiOutlineClockCircle className="header-icon star-icon" />
                            </div>
                            <h3>Recently viewed</h3>
                        </div>
                        <div className="primary-boards-container-section">
                            
                            <BoardList boards={boards} onToggleStarred={onToggleStarred} toggleModal={toggleModal}/>
                        </div>
                    </section>
                </div>
            </section>
            {modal.isModalOpen && (
                <DynamicActionModal toggleModal={toggleModal} type={modal.type} event={modal.event} isDetails={true} posXAddition={150}/>
            )}
        </section>
    );
}
