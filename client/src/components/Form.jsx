import React from 'react';

const Form = props => {
    return(
        <>
        <form onSubmit={props.onSubmitHandler}>
            <div className="input">
                <h3>Pet Name: <input type = "text" name="petName" onChange={props.onChangeHandler} value={props.form.petName}/></h3>
                {
                    props.error.petName ? <span style={{color:"red"}}>{props.error.petName.message}</span> : ""
                }
            </div>
            <div className="input">
                <h3>Pet Type: <input type="text" name="petType" onChange={props.onChangeHandler} value={props.form.petType}/></h3>
                {
                    props.error.petType ? <span style={{color:"red"}}>{props.error.petType.message}</span> : ""
                }
            </div>
            <div className="input">
                <h3>Description: <input type = "text" name="description" onChange={props.onChangeHandler} value={props.form.description}/></h3>
                {
                    props.error.description ? <span style={{color:"red"}}>{props.error.description.message}</span> : ""
                }
            </div>
            <div>
                <h3>Skill 1: <input type="text" name="skill1" value={props.form.skill1} onChange={props.onChangeHandler}/></h3>
            </div>
            <div>
                <h3>Skill 2: <input type="text" name="skill2" value={props.form.skill2} onChange={props.onChangeHandler}/></h3>
            </div>
            <div>
                <h3>Skill 3: <input type="text" name="skill3" value={props.form.skill3} onChange={props.onChangeHandler}/></h3>
            </div>
            <input type="submit" value="submit"/>
        </form>
        </>
    )
}
export default Form;