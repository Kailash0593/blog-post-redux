import { Controller, useForm, type SubmitHandler } from "react-hook-form"
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import type { CommentI } from "../../interface";

interface Props {
    postId: number;
    onFormSubmit: (data: CommentI) => void;
}

interface CommentFormFieldsI {
    name: string;
    comment: string;
}

export type TaskFormInputHandle = {
    
}

export const CommentForm = (props: Props) => {
    const [focusedField, setFocusedField] = useState<string | null>(null);


    const { register, handleSubmit, formState: { errors }, setFocus, reset, control } = useForm<CommentFormFieldsI>();

    const onSubmit: SubmitHandler<CommentFormFieldsI> = (formData) => {
        console.log("formData", formData)
        let comment: CommentI = {
            id: new Date().getTime(),
            body: formData.comment,
            name: formData.name,
            email: 'fake@gmail.com',
            postId: props.postId
        }
        props.onFormSubmit(comment);
        reset();
    }

    useEffect(() => {
        setFocus("name")
    }, [setFocus])

    return (
        <div className="h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-end justify-center flex-col">
                <div className="w-full mb-2">
                    <Controller
                        name="name"
                        control={control}
                        render={({ field: { value } }) => (
                            <>
                                <TextField className="w-full" type="text" label='Enter name'
                                    slotProps={{
                                        inputLabel: {
                                            shrink: (value?.length > 0 || focusedField === 'name') ? true : false
                                        }
                                    }}
                                    onFocus={() => setFocusedField('name')}
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Must be 3–15 characters long and contain only letters, numbers, spaces, -, _"
                                        },
                                        pattern: {
                                            value: /^(?=.{3,15}$)[A-Za-z0-9_-]+(?: [A-Za-z0-9_-]+)*$/i,
                                            message: "Must be 3–15 characters long and contain only letters, numbers, spaces, -, _"
                                        },
                                        onBlur: () => {
                                            setFocusedField(null)
                                        }
                                    })} />
                                {errors.name && <span>{errors.name.message}</span>}
                            </>
                        )}
                    />
                </div>
                <div className="w-full mb-2">
                    <Controller
                        name="comment"
                        control={control}
                        render={({ field: { value } }) => (
                            <>
                                <TextField className="w-full" label="Enter comment" multiline rows={4}
                                    onFocus={() => setFocusedField('comment')}
                                    slotProps={{
                                        inputLabel: {
                                            shrink: ((value && value?.length > 0) || focusedField === 'comment') ? true : false
                                        }
                                    }}
                                    {...register("comment", {
                                        pattern: {
                                            value: /^(?=.{0,100}$)[A-Za-z0-9_-]+(?: [A-Za-z0-9_-]+)*$/i,
                                            message: "max 100 characters long and contain only letters, numbers, spaces, -, _"
                                        },
                                        onBlur: () => {
                                            setFocusedField(null)
                                        }
                                    })} />
                                {errors.comment && <span>{errors.comment?.message}</span>}
                            </>
                        )}
                    />
                </div>
                <Button variant="contained" type="submit">Add</Button>
            </form>
        </div>
    )
}