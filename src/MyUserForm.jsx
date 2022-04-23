const formClassName = ""
const inputClassName = ""
const errorClassName = ""

export const MyUserForm = () => {
    return <form>
        <label>First Name:</label>
        <input className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Last Name:</label>
        <input className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Email:</label>
        <input type="email" className={inputClassName} />
        <span className={errorClassName}></span>
    </form>
}