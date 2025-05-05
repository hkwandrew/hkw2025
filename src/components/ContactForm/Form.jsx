import { Children, createElement } from 'react'
import {  useForm } from 'react-hook-form'

const Form = ({ defaultValues, children, onSubmit }) => {
    const methods = useForm({ defaultValues })
    const { handleSubmit } = methods

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Children.map(children, (child) => {
                return child.props.name
                    ? createElement(child.type, {
                        ...{
                            ...child.props,
                            register: methods.register,
                            key: child.props.name,
                        },
                    })
                    : child
            })}
        </form>
    )
}

export default Form
