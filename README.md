# TODO list api

## Introduction

TODO list API lets you search, fetch, create to-do-items. One has to use RESTful calling style to access and edit TODO list API.

| Method          |     HTTP Request      |                                                                                                                 Description |
| --------------- | :-------------------: | --------------------------------------------------------------------------------------------------------------------------: |
| getAllTasks     |      GET /todos       |                                                                                                Returns all the to-do-tasks. |
| getSpecificTask |  GET /todos/:todoid   |                                                                                                      Returns specific task. |
| addNewTask      |      POST /todos      | Creates a new to-do-task inside a specific list/group. Note: Provide group_id in the POST request's header. e.g id:group_id |
| deleteTask      | DELETE /todos/:todoid |                                                                                    Deletes the user's specified to-do-item. |
| UpdateTask      | PATCH /todos/:todoid  |                                                                                    Updates the user's specified to-do-item. |

## How to use:

**Get All Tasks**: Send a GET request to ```https://thawing-everglades-05899.herokuapp.com/todos``` to get an array of all entries.

When empty

<img src="https://github.com/SohanReddyA/Mini-Project-4/blob/master/images/GetAll.PNG"/>

With an entry

<img src="https://github.com/SohanReddyA/Mini-Project-4/blob/master/images/GetAll2.PNG"/>

**Get Specific Task**: Send a GET request to ```https://thawing-everglades-05899.herokuapp.com/todos/:todoid``` to get the entry you need, where todoid is the id of the respective entry.

<img src="https://github.com/SohanReddyA/Mini-Project-4/blob/master/images/GetSingle.PNG"/>

**Add New Task**: Send a POST request to ```https://thawing-everglades-05899.herokuapp.com/todos``` with a json body having the elements body and title (preference optional) to add an entry with a random id.

<img src="https://github.com/SohanReddyA/Mini-Project-4/blob/master/images/Post.PNG"/>

**Delete Task**: Send a DELETE request to ```https://thawing-everglades-05899.herokuapp.com/todos/:todoid``` to delete an entry you don't need, where todoid is the id of the respective entry.

Deleting
<img src="https://github.com/SohanReddyA/Mini-Project-4/blob/master/images/Delete1.PNG"/>

After Deleting
<img src="https://github.com/SohanReddyA/Mini-Project-4/blob/master/images/Delete2.PNG"/>

**Updating an entry**: To update an entry, add the elements as an array of objects with properties "propName" and "value" to the body and send a PATCH request to ```https://thawing-everglades-05899.herokuapp.com/todos/:todoid``` to change the respective elements.

Before Update
<img src="https://github.com/SohanReddyA/Mini-Project-4/blob/master/images/GetSingle.PNG"/>

While Updating
<img src="https://github.com/SohanReddyA/Mini-Project-4/blob/master/images/Patch1.PNG"/>

After Update
<img src="https://github.com/SohanReddyA/Mini-Project-4/blob/master/images/Patch2.PNG"/>
