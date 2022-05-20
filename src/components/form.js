import useForm from '../hooks/form.js';
import { Button, Card, Elevation,Switch } from "@blueprintjs/core";
export default function Form(props){
const {addItem ,showComplete,showComleteToggle,itemPerPage}=props;
    const { handleChange, handleSubmit } = useForm(addItem);
    return(
        <form onSubmit={handleSubmit}>
<Card className="card-submit" elevation={Elevation.TWO} style={{marginRight:"20px"}}>
        <h4>Add To Do Item</h4>

        <label>
          <p>To Do Item:</p>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>
        <hr />
        <label>
          <p>Assigned To:</p>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>
        <hr />
        <label>
          <p>Difficulty:</p>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>
        <hr />
      < label>
          <p>items per page:</p>
          <input onChange={itemPerPage} defaultValue={3} type="range" min={1} max={5} name="items per page" />
        </label>
        <hr />
        <Switch checked={showComplete} label="show completed items" onChange={showComleteToggle} />
        <hr />
        <label>
          <Button type="submit">Add Item</Button>
        </label>
        </Card>
      </form>
    )
}
