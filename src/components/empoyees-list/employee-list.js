import Employee from "../employee/employee";
import "./employee-list.css"

export default function EmployeeList({data, onDelete, onToggleProp, onUpdateSalary}) {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Employee key={id}
                      {...itemProps}
                      onDelete={() => onDelete(id)}
                      onToggleProp={(e) => onToggleProp(id,
                          e.currentTarget.getAttribute("data-toggle"))}
                      onUpdateSalary={(e) => onUpdateSalary(id, e.target.value)}
            />
        )
    })

    return (
        <ul className={"app-list list-group"}>
            {elements}
        </ul>
    )
}