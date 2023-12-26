import React, { useState } from 'react'
import reminder from "../img/reminder.png"

const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e)=> {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can't be blank");
        }
        else {
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }

    let styleReminder = {
        width: "71px"
    }

    let styleAdd = {
        alignItems: "center",
        margin: "auto"
    }

  return (
    <>
    <div className="container">
        <form className="col px-4 py-2 border border-2 border-dark my-5 rounded" onSubmit={submit}>
            <div className="d-flex" style={styleAdd}>
                <img src={reminder} alt="reminder" style={styleReminder}/>
                <h3 className="mt-3 mx-2">Add To Doo</h3>
            </div>
        <div className="col-md-12 my-3">
            <label htmlFor="validationDefault01" className="form-label">To Doo Title</label>
            <input type="text" className="form-control border border-1 border-dark" value={title} onChange={(e)=> setTitle(e.target.value)} id="validationDefault01" required/>
        </div>
        <div className="mb-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">To Doo Description</label>
            <textarea className="form-control border border-1 border-dark" value={desc} onChange={(e)=> setDesc(e.target.value)} id="exampleFormControlTextarea1" rows="5" required></textarea>
        </div>
        {/* <div className="d-flex">
            <div className="col-md-3 my-3">
                <label htmlFor="validationDefault04" className="form-label">Day</label>
                <select className="form-select border border-1 border-dark" id="validationDefault04" required>
                <option selected disabled value="">Choose</option>
                <option>Mon</option>
                <option>Tue</option>
                <option>Wed</option>
                <option>Thu</option>
                <option>Fri</option>
                <option>Sat</option>
                <option>Sun</option>
                </select>
            </div>
            <div className="col-md-3 m-3">
                <label htmlFor="validationDefault04" className="form-label">Date</label>
                <select className="form-select border border-1 border-dark" id="validationDefault04" required>
                <option selected disabled value="">Choose</option>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
                </select>
            </div>
        </div>
        <div className="col-md-3 my-3">
            <label htmlFor="validationDefault04" className="form-label">Repeate</label>
            <select className="form-select border border-1 border-dark" id="validationDefault04" required>
            <option selected disabled value="">Choose</option>
            <option>Once</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
            </select>
        </div>
        <div className="col-md-3 my-3">
            <label htmlFor="validationDefault04" className="form-label">Task List</label>
            <select className="form-select border border-1 border-dark" id="validationDefault04" required>
            <option selected disabled value="">Choose</option>
            <option>Default</option>
            <option>Work</option>
            <option>Personal</option>
            <option>Office</option>
            <option>Wishlist</option>
            </select>
        </div>
        <div className="col-12 my-3">
            <div className="form-check">
            <input className="form-check-input border border-1 border-dark" type="checkbox" value="" id="invalidCheck2" required/>
            <label className="form-check-label" htmlFor="invalidCheck2">Confirm the task</label>
            </div>
        </div> */}
        <div className="col-12 my-3">
            <button className="btn btn-sm btn-success" type="submit">+ Add Todo</button>
        </div>
        </form>
    </div>
    </>
  )
}

export default AddTodo;
