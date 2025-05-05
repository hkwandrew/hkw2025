import { useCallback, useMemo, useRef, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { motion, useInView } from 'motion/react'

const ContactForm = ({ ref }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedInput, setFocusedInput] = useState(null)
    const [submitError, setSubmitError] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
        reset,
    } = useForm()

    const projectTypeOptions = useMemo(
        () => [
            { value: 'strategy', label: 'Strategy' },
            { value: 'branding', label: 'Branding' },
            { value: 'writing', label: 'Writing' },
            { value: 'design', label: 'Design' },
            { value: 'web', label: 'Web' },
            { value: 'apps', label: 'Apps' },
            { value: 'products', label: 'Products' },
            { value: 'print', label: 'Print' },
            { value: 'campaigns', label: 'Campaigns' },
            { value: 'marketing', label: 'Marketing' },
            { value: 'seo', label: 'SEO' },
            { value: 'analytics', label: 'Analytics' },
        ],
        []
    )

    const selectedProjectTypes = Array.isArray(watch('projectType'))
        ? watch('projectType')
        : []

    const toggleProjectType = useCallback(
        (option) => {
            const currentValues = watch('projectType') || []
            const newValues = currentValues.includes(option.value)
                ? currentValues.filter((projectType) => projectType !== option.value)
                : [...currentValues, option.value]

            setValue('projectType', newValues, { shouldValidate: true })
        },
        [setValue, watch]
    )

    const onSubmit = (data) => {
        setIsSubmitting(true)
        setSubmitError(null)

        try {
            emailjs.send(
                'HKW_contact_form',
                'contact_form',
                {
                    product_type: data.projectType?.join(', ') || '',
                    from_name: data.name,
                    organization: data.organization,
                    from_email: data.email,
                    phone: data.phone,
                    website: data.website,
                    project: data.project,
                },
                import.meta.env.VITE_EMAILJS_PK
            )

            setShowModal(true)
            reset()
            setTimeout(() => setShowModal(false), 5000)
        } catch (error) {
            setSubmitError('Failed to send the message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div className='form-container' ref={ref}>
            <svg
                className='contact-form-background'
                width='867'
                height='1200'
                viewBox='0 0 867 917'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M0,0L764,0L764,1122L0,1122L0,0Z'
                    fill='rgb(184,230,255)'
                    stroke='none'
                    transform='matrix(-0.997564 -0.069756 -0.069756 0.997564 815.454976 112.330672)'
                ></path>
            </svg>

            <div className='form-wrapper'>
                <h2 className='h5 text-blue-100'>Get in touch with my humans.</h2>
                <p className='body-medium text-blue-200'>
                    The world changes one conversation at a time-human and marmot.
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='multi-select-wrapper'>
                        <h3 className='body-large text-blue-200'>Project Type</h3>
                        <div className='multi-select-container'>
                            {projectTypeOptions.map((option) => (
                                <button
                                    key={option.value}
                                    type='button'
                                    onClick={() => toggleProjectType(option)}
                                    className={`action ${Array.isArray(selectedProjectTypes) &&
                                        selectedProjectTypes.includes(option.value)
                                        ? 'selected'
                                        : ''
                                        }`}
                                    aria-pressed={selectedProjectTypes.includes(option.value)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    {['name', 'organization', 'email', 'phone', 'website', 'project'].map(
                        (field) => (
                            <div
                                key={field}
                                className={`form-input-container ${!!watch(field) || focusedInput === field ? 'shrink' : ''
                                    }`}
                            >
                                <label htmlFor={field}>
                                    {field === 'name'
                                        ? "What's your name?"
                                        : field === 'organization'
                                            ? 'What organization do you work with?'
                                            : field === 'website'
                                                ? 'Do you have a website?'
                                                : field === 'project'
                                                    ? 'Tell us about your project'
                                                    : field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                {field !== 'project' ? (
                                    <input
                                        id={field}
                                        type={
                                            field === 'email'
                                                ? 'email'
                                                : field === 'phone'
                                                    ? 'tel'
                                                    : 'text'
                                        }
                                        className={errors[field] ? 'input-error' : ''}
                                        {...register(field, {
                                            required: `${field.charAt(0).toUpperCase() + field.slice(1)
                                                } is required`,
                                        })}
                                        onFocus={() => setFocusedInput(field)}
                                        onBlur={() => setFocusedInput(null)}
                                    />
                                ) : (
                                    <input
                                        id={field}
                                        type='textarea'
                                        className={errors[field] ? 'input-error' : ''}
                                        {...register(field, {
                                            required: `${field.charAt(0).toUpperCase() + field.slice(1)
                                                } is required`,
                                        })}
                                        onFocus={() => setFocusedInput(field)}
                                        onBlur={() => setFocusedInput(null)}
                                    />
                                )}
                                {errors[field] && (
                                    <span
                                        className={`error-msg  ${field === 'project' && 'project-error'
                                            }`}
                                        role='alert'
                                        aria-live='polite'
                                    >
                                        {errors[field].message}
                                    </span>
                                )}
                            </div>
                        )
                    )}
                    {submitError && <p className='error'>{submitError}</p>}
                    <button
                        className='submit-button'
                        type='submit'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send your message'}
                    </button>
                </form>
                {showModal && (
                    <div onClick={() => setShowModal(false)}>
                        <div onClick={(e) => e.stopPropagation()}>
                            <p>Thank you!</p>
                            <br />
                            <p>Your message has been submitted successfully.</p>
                            <button onClick={() => setShowModal(false)}>×</button>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default ContactForm
