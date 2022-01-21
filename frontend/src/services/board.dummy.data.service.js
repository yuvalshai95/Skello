import { utilService } from './util.service.js'

const DUMMY_BOARDS = [
    {
        "_id": "b101",
        "title": "Skello Demo",
        "isStarred": true,
        "isPublic": false,
        "createdAt": 1589983468418,
        "createdBy": {
            "_id": "u101",
            "fullname": "Asaf Margalit",
            "imgUrl": "http://some-img"
        },
        "style": {
            background: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)'
        },
        "labels": [
            {
                "id": "l101",
                "title": "",
                "color": "red"
            },
            {
                "id": "l202",
                "title": "",
                "color": "blue"
            },
            {
                "id": "l303",
                "title": "done",
                "color": "yellow"
            },
        ],
        "members": [
            {
                "_id": "u101",
                "fullname": "Asaf Margalit",
                "imgUrl": "https://www.google.com"
            },
            {
                "_id": "u102",
                "fullname": "Harry Potter",
                "imgUrl": "https://www.google.com"
            },
            {
                "_id": "u103",
                "fullname": "Zinadin Zidan",
                "imgUrl": "https://www.google.com"
            }
        ],
        "groups": [
            {
                "id": utilService.makeId(),
                "title": "Todo",
                "tasks": [
                    {
                        "id": utilService.makeId(),
                        "title": "Nested Task",
                        "description": "Create nested task details page, with dark overflow",
                        "createdAt": Date.now(),
                        "labelIds": ["l101", "l202"],
                        "style": {
                            "backgroundColor": "#4c78b7",
                            "backgroundImage": "url(https://images.unsplash.com/photo-1642628658566-1db49cadf78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60)",
                            "isCover": false
                        },
                        "byMember": {
                            "_id": "u103",
                            // TODO
                            "imgUrl": "url",
                            "fullname": "Zinadin Zidan",
                            "username": "zinadin.bold@gmail.com",
                        },
                        "attachments": [
                            {
                                "id": utilService.makeId(),
                                "name": "Media url",
                                "url": "url(https://images.unsplash.com/photo-1642628658566-1db49cadf78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60=435&q=80)",
                                "createdAt": Date.now()
                            }],
                        "checklists": [
                            {
                                "id": "VXZcwp",
                                "title": "Ori The King",
                                "todos": [
                                    {
                                        "title": "read about d&d",
                                        "id": "b1998",
                                        "isDone": true
                                    },
                                    {
                                        "title": "build checkList & todos",
                                        "id": "b1997",
                                        "isDone": false
                                    },
                                    {
                                        "title": "add labels",
                                        "id": "b1212",
                                        "isDone": true
                                    }
                                ]
                            }
                        ],
                        "members": [
                            {
                                "_id": "u104",
                                "imgUrl": "url",
                                "fullname": "Ori Ben Amram",
                                "username": "ori8",
                            },
                            {
                                "_id": "u102",
                                "imgUrl": "url",
                                "fullname": "Yuval Shai",
                                "username": "yuval22",
                            },
                            {
                                "_id": "u103",
                                "imgUrl": "url",
                                "fullname": "Daniel Shaked",
                                "username": "daniel98",
                            }],
                        "dueDate": 1589983468418,
                        "isDone": false,
                        "archiveAt": null
                    }
                ]
            },
        ],
        "activities": [
            {
                "id": utilService.makeId(),
                "txt": "added a submit button",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u103",
                    "fullname": "Harry Potter",
                    "imgUrl": "http://some-img"
                },
                "task": {
                    "id": utilService.makeId(),
                    "title": "Doing"
                }
            }
        ]
    }
]
//     {
//         "_id": "b545",
//         "isStarred": true,
//         "title": "Sprint4",
//         "isPublic": false,
//         "createdAt": 1589983468418,
//         "createdBy": {
//             "_id": "u545",
//             "fullname": "Yuval Shai",
//             "imgUrl": "https://www.google.com"
//         },
//         "style": { background: "url(https://images.unsplash.com/photo-1642547598615-6213315557aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60)" },
//         "labels": [
//             {
//                 "id": "l103",
//                 "title": "Done",
//                 "color": "#61bd4f"
//             }
//         ],
//         "members": [
//             {
//                 "_id": "u404",
//                 "fullname": "Daniel Shaked",
//                 "imgUrl": "https://www.google.com"
//             }
//         ],
//         "groups": [
//             {
//                 "id": utilService.makeId(),
//                 "title": "Group 1",
//                 "tasks": [
//                     {
//                         "id": utilService.makeId(),
//                         "title": "We have to Replace the logo2",
//                         "description": "Replace logo",
//                         "createdAt": Date.now(),
//                         "labelIds": ["l101"],
//                         "style": {},
//                         "byMember": {
//                             "_id": "u101",
//                             "imgUrl": "url",
//                             "fullname": "Muki Pori",
//                             "username": "muki2",
//                         },
//                         "attachments": [
//                             {
//                                 "id": utilService.makeId(),
//                                 "name": "Media url",
//                                 "url": "https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm",
//                                 "createdAt": Date.now()
//                             }],
//                         "members": [
//                             {
//                                 "_id": "u101",
//                                 "imgUrl": "url",
//                                 "fullname": "Ori Ben Amram",
//                                 "username": "ori8",
//                             },
//                             {
//                                 "_id": "u102",
//                                 "imgUrl": "url",
//                                 "fullname": "Yuval Shai",
//                                 "username": "yuval22",
//                             },
//                             {
//                                 "_id": "u103",
//                                 "imgUrl": "url",
//                                 "fullname": "Daniel Shaked",
//                                 "username": "daniel98",
//                             }],
//                         "dueDate": 1589983468418,
//                         "isDone": false,
//                         "archiveAt": null
//                     }
//                 ]
//             }
//         ],
//         "activities": [
//             {
//                 "id": utilService.makeId(),
//                 "txt": "Moved this card from Todo to Doing",
//                 "createdAt": 154514,
//                 "byMember": {
//                     "_id": "u101",
//                     "fullname": "Abi Abambi",
//                     "imgUrl": "http://some-img"
//                 },
//                 "task": {
//                     "id": utilService.makeId(),
//                     "title": "Replace Logo"
//                 }
//             }
//         ]
//     },
//     {
//         "_id": "b999",
//         "isStarred": false,
//         "title": "Sprint 5",
//         "isPublic": false,
//         "createdAt": 1589983468418,
//         "createdBy": {
//             "_id": "u109",
//             "fullname": "Yuval Shai",
//             "imgUrl": "https://www.google.com"
//         },
//         "style": { background: "url(https://images.unsplash.com/photo-1642548666500-7990b88e691f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60)" },
//         "labels": [
//             {
//                 "id": "l109",
//                 "title": "Done",
//                 "color": "#61bd4f"
//             }
//         ],
//         "members": [
//             {
//                 "_id": "u112",
//                 "fullname": "Daniel Shaked",
//                 "imgUrl": "https://www.google.com"
//             }
//         ],
//         "groups": [
//             {
//                 "id": utilService.makeId(),
//                 "title": "Group 1",
//                 "tasks": [
//                     {
//                         "id": utilService.makeId(),
//                         "title": "We have to Replace the logo2",
//                         "description": "Replace logo",
//                         "createdAt": Date.now(),
//                         "labelIds": ["l101"],
//                         "style": {},
//                         "byMember": {
//                             "_id": "u101",
//                             "imgUrl": "url",
//                             "fullname": "Muki Pori",
//                             "username": "muki2",
//                         },
//                         "attachments": [
//                             {
//                                 "id": utilService.makeId(),
//                                 "name": "Media url",
//                                 "url": "https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm",
//                                 "createdAt": Date.now()
//                             }],
//                         "members": [
//                             {
//                                 "_id": "u777",
//                                 "imgUrl": "url",
//                                 "fullname": "Ori Ben Amram",
//                                 "username": "ori8",
//                             },
//                             {
//                                 "_id": "u555",
//                                 "imgUrl": "url",
//                                 "fullname": "Yuval Shai",
//                                 "username": "yuval22",
//                             },
//                             {
//                                 "_id": "u999",
//                                 "imgUrl": "url",
//                                 "fullname": "Daniel Shaked",
//                                 "username": "daniel98",
//                             }],
//                         "dueDate": 1589983468418,
//                         "isDone": false,
//                         "archiveAt": null
//                     }
//                 ]
//             }
//         ],
//         "activities": [
//             {
//                 "id": utilService.makeId(),
//                 "txt": "Changed Color",
//                 "createdAt": 154514,
//                 "byMember": {
//                     "_id": "u8211",
//                     "fullname": "Abi Abambi",
//                     "imgUrl": "http://some-img"
//                 },
//                 "task": {
//                     "id": utilService.makeId(),
//                     "title": "Replace Logo"
//                 }
//             }
//         ]
//     },
//     {
//         "_id": "b156",
//         "isStarred": false,
//         "title": "Sprint 6",
//         "isPublic": false,
//         "createdAt": 1589983468418,
//         "createdBy": {
//             "_id": "u109",
//             "fullname": "Yuval Shai",
//             "imgUrl": "https://www.google.com"
//         },
//         "style": { background: "url(https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60)" },
//         "labels": [
//             {
//                 "id": "l562",
//                 "title": "Done",
//                 "color": "#61bd4f"
//             }
//         ],
//         "members": [
//             {
//                 "_id": "u6135",
//                 "fullname": "Daniel Shaked",
//                 "imgUrl": "https://www.google.com"
//             }
//         ],
//         "groups": [
//             {
//                 "id": utilService.makeId(),
//                 "title": "Group 1",
//                 "tasks": [
//                     {
//                         "id": utilService.makeId(),
//                         "title": "We have to Replace the logo2",
//                         "description": "Replace logo",
//                         "createdAt": Date.now(),
//                         "labelIds": ["l101"],
//                         "style": {},
//                         "byMember": {
//                             "_id": "u101",
//                             "imgUrl": "url",
//                             "fullname": "Muki Pori",
//                             "username": "muki2",
//                         },
//                         "attachments": [
//                             {
//                                 "id": utilService.makeId(),
//                                 "name": "Media url",
//                                 "url": "https://res.cloudinary.com/dusakec3z/video/upload/v1633862965/riynj77lwmbwrq3smk8k.webm",
//                                 "createdAt": Date.now()
//                             }],
//                         "members": [
//                             {
//                                 "_id": "u1545",
//                                 "imgUrl": "url",
//                                 "fullname": "Ori Ben Amram",
//                                 "username": "ori8",
//                             },
//                             {
//                                 "_id": "u35445",
//                                 "imgUrl": "url",
//                                 "fullname": "Yuval Shai",
//                                 "username": "yuval22",
//                             },
//                             {
//                                 "_id": "u54555",
//                                 "imgUrl": "url",
//                                 "fullname": "Daniel Shaked",
//                                 "username": "daniel98",
//                             }],
//                         "dueDate": 1589983468418,
//                         "isDone": false,
//                         "archiveAt": null
//                     }
//                 ]
//             }
//         ],
//         "activities": [
//             {
//                 "id": utilService.makeId(),
//                 "txt": "Changed Color",
//                 "createdAt": 154514,
//                 "byMember": {
//                     "_id": "u8211",
//                     "fullname": "Abi Abambi",
//                     "imgUrl": "http://some-img"
//                 },
//                 "task": {
//                     "id": utilService.makeId(),
//                     "title": "Replace Logo"
//                 }
//             }
//         ]
//     }

// ]

export default DUMMY_BOARDS;