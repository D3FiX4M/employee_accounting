import "./app-info.css"
import React from "react";
class AppInfo extends React.Component{

    render() {
        const {data} = this.props
        return(
            <div className={"app-info"}>
                <h1>Учет сотрудников в компании</h1>
                <h2>Общее число сотрудников: {data.length} </h2>
                <h2>Премию получат: {data.filter(item=> item.rise===true).length}</h2>
            </div>
        )
    }
}

export default AppInfo