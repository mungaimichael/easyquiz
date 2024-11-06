import {Formik} from "formik";

export default function Form() {

    const initialValues = {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        repeatPassword:'',
    }
    return (
        <div className="w-full  flex justify-center items-start  ">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, {setSubmitting}) => {
                console.log(values);
                setSubmitting(false);
            }}>
                {({handleChange,handleBlur,isSubmitting, values:{email, password, repeatPassword, lastName, firstName}})=> {


                    return (


                    <form className="w-5/6 flex flex-col justify-center">
                        <div className="relative  w-full mb-5 group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block py-2.5 px-0 w-full text-md text-text bg-transparent border-0 border-b-2 appearance-none  border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"

                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={email}
                            />
                            <label htmlFor="email"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">email</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"

                                placeholder=" "
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={password}
                            />
                            <label
                                onClick={() => console.log(email)}
                                htmlFor="Password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="repeatPassword"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"

                                placeholder=" "
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={repeatPassword}
                            />
                            <label
                                onClick={() => console.log(email)}
                                htmlFor=""
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={firstName}
                                    type="text"
                                    name="firstName"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                                    placeholder=" "/>
                                <label htmlFor="lastName"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                                    name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={lastName}
                                    type="text"
                                    name="lastName"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                                    placeholder=" "/>
                                <label htmlFor="lastName"
                                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                                    name</label>
                            </div>
                        </div>

                        <button
                            disabled={isSubmitting}
                            type="submit"
                                className="text-accent bg-secondary w-full rounded-lg mx-auto h-10">Submit
                        </button>
                    </form>

                )}}
            </Formik>
        </div>
    )
}