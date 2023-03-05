import "./employee.css"
import React from "react";

class Employee extends React.Component {

    render() {
        const {name, salary, onDelete, onToggleProp, increase, rise, onUpdateSalary} = this.props
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += " increase";
        }
        if (rise) {
            classNames += " like"
        }

        return (
            <li className={classNames}>
                {/*Имя сотрудника*/}
                <span
                    className="list-group-item-label"
                    onClick={onToggleProp}
                    data-toggle={"rise"}>
                    {name}</span>
                {/*З/П сотрудника*/}
                <input
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salary}
                onChange={onUpdateSalary}/>
                {/*Блок с кнопками*/}
                <div className='d-flex justify-content-center align-items-center'>

                    {/*Назначить премию*/}
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={onToggleProp}
                            data-toggle={"increase"}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    {/*Удалить сотрудника*/}
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    {/*Пользователь идет на повышение*/}
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default Employee