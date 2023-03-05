import "./app-filter.css"
import React from "react";

class AppFilter extends React.Component {

    render() {
        const buttonsData = [
            {name: "all", label: "Все сотрудники"},
            {name: "increase", label: "На повышение"},
            {name: "prem", label: "На премию"},
            {name: ">1000", label: "З/П больше 1000$"}
        ]
        const buttons = buttonsData.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? "btn btn-light" : "btn btn-outline-light"
            return (
                <button
                    className={`btn ${clazz}`}
                    key={name}
                    type={"button"}
                    onClick={()=> this.props.onUpdateFilter(name)}>
                    {label}
                </button>
            )
        })
        return (
            <div className={"btn-group"}>
                {buttons}
            </div>
        )
    }
}

export default AppFilter