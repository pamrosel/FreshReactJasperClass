const formClassName = "container border-x border-black mx-auto p-4 grid md:grid-cols-2 gap-1"
const inputClassName = "border border-1 border-black rounded-md p-1"
const errorClassName = "md:col-span-2"

export const MyUserForm = () => {
    return <form className={formClassName}>
        <label>First Name:</label>
        <input className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Last Name:</label>
        <input className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Email:</label>
        <input type="email" className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Username:</label>
        <input className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Password:</label>
        <input type="password" className={inputClassName} />
        <label>Confirm Password:</label>
        <input type="password" className={inputClassName} />
        <span className={errorClassName}></span>
        <label>Role:</label>
        <select className={inputClassName}>
            <option value="user">User</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
        </select>
        <span className={errorClassName}></span>
        <input className={inputClassName + " md:col-start-2 "} type="submit"/>
        <span className="text-blue-500 md:col-start-2">This is the status text!</span>
    </form>
}