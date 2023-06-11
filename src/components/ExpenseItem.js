//https://vscode.dev/tunnel/manjarodesktop/home/guillem/react/01-starting-setup
import './ExpenseItem.css'
function ExpenseItem(props) {

    const expenseTitle = props.title
    const expenseAmount = props.amount

    const month=props.date.toLocaleString('ca-ES',{month: 'long'})
    const day=props.date.toLocaleString('ca-ES',{day: '2-digit'})
    const year=props.date.getFullYear()


  return (
    <div className='expense-item'>
      <div>
        <div>
            {month}
        </div>
        <div>
            {year}
        </div>
        <div>
            {day}
        </div>
      </div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}€</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
