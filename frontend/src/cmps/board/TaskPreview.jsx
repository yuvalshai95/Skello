import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

// CMPS
import { TaskLabels } from './TaskLabels';
import { EditIcon } from '../EditIcon';

export function TaskPreview(props) {
  const { task, boardId, groupId, index, boardLabels, areLabelsShown, setLabelsShown } = props;
  const {
    archiveAt,
    attachments,
    byMember,
    createdAt,
    description,
    dueDate,
    isDone,
    labelIds,
    members,
    style,
    title,
  } = task;

  // const [previewBackgroundColor, setPreviewColor] = useState(null);
  // const [previewBackgroundImage, setPreviewImage] = useState(null);
  const { isCover, isTextDarkMode = true } = task.style;

  // useEffect(() => {
    //   setPreviewColor(task.style.backgroundColor);
  //   setPreviewImage(task.style.backgroundImage);
  // }, [task]);

  const getPreviewStyle = () => {
    // Cover !
    if (isCover) {
      if (task.style.backgroundImage.url) {
        // Has an image
        return {
          background: `url(${task.style.backgroundImage.url}) center center / cover`,
          width: '100%',
          minHeight: '180px',
        };
      } else {
        // Doesnt have an image
        return { backgroundColor: task.style.backgroundColor };
      }

      // Not Cover - Half!
    } else {
      if (task.style.backgroundImage.url) {
        // Has an image
        return {
          // backgroundColor: 'white',
          padding: '6px 8px 2px',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        };
      } else {
        // Doesnt have an imageborder-top-left-radius
        return {
          // backgroundColor: 'white',
          padding: '6px 8px 2px',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        };
      }
    }
  };

  // Title style by cover
  const getTitleStyleByCover = () => {
    if (isCover) {
      if (task.style.backgroundImage?.url) {
        return { fontSize: '16px', fontWeight: '500' };
      } else {
        if(task.style.backgroundColor === '#344563') return { fontSize: '16px', fontWeight: '500', color: 'white' };
        return { fontSize: '16px', fontWeight: '500' };
      }
    }
    // return {fontSize: '16px', fontWeight: '500'};
  };

  const getUpperPreviewBackground = () => {
    if (isCover) return { height: '0px' }
    if (task.style.backgroundImage.url) {
      // Has an image
      return { background: `url(${task.style.backgroundImage.url}) center center / cover`, height: '160px' };
    } else if (task.style.backgroundColor) {
      // Doesnt have an imageborder-top-left-radius
      return { backgroundColor: task.style.backgroundColor, height: '32px' };
    }
    return { display: 'none' };
  };

  const getPreviewClass = () => {
    if (task.style.isCover && task.style.backgroundImage?.url) {
      return 'full-cover-mode';
    }
    return '';
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Link to={`/board/${boardId}/${groupId}/${task.id}`}>
          <div
            className="task-preview-wrapper"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <EditIcon />
            {/* {!isCover && ( */}
              <section className="upper-preview-background" style={getUpperPreviewBackground()}></section>
            {/* )} */}
            <section style={getPreviewStyle()} className={`task-preview ${getPreviewClass()}`}>
              {/* <div className='inner-fade-wallpaper'></div> */}
              {/* IMG */}
              {attachments?.length > 0 && !isCover && (
                <img
                  src={attachments[0].url}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    objectFit: 'cover',
                    maxHeight: '240px',
                    marginBottom: 5,
                  }}
                  alt="attachment"
                />
              )}

              {/* LABELS */}
              {labelIds?.length > 0 && !isCover && (
                <TaskLabels
                  areLabelsShown={areLabelsShown}
                  setLabelsShown={setLabelsShown}
                  labelIds={labelIds}
                  boardLabels={boardLabels}
                />
              )}

              {/* TITLE */}
              <div
                className={`task-title ${isTextDarkMode ? 'dark-text-mode' : 'bright-text-mode'}`}
                style={getTitleStyleByCover()}>
                <div className="full-cover-mode-upper-gradient"></div>
                <div className="title-container">
                  <p>{title}</p>

                </div>
              </div>
            </section>
          </div>
        </Link>
      )}
    </Draggable>
  );
}
