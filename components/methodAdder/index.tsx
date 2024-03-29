import React, { Dispatch, SetStateAction } from "react";
import "antd/dist/antd.css";
import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import styles from "./index.module.css";

const { TextArea } = Input;

const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 20,
            offset: 3
        }
    }
};

const MethodAdder: React.FC<{
    setMethod: Dispatch<SetStateAction<string[]>>
}> = ({ setMethod }) => {
    const onFinish = (values: { steps: string[] }) => {
        setMethod(values.steps);
    };

    return (
        <Form
            name="method_form"
            {...formItemLayoutWithOutLabel}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item>
                <h1 className={styles.title}>Add Method</h1>
                {/*
                <Form.Item>
                    <span className={styles.index}> 1 </span>
                    <Form.Item
                        className={styles.defaultInput}
                        name="step 1"
                        rules={[
                            {
                                required: true,
                                message: "Insert at least one step."
                            }
                        ]}
                    >
                        <TextArea
                            className={styles.input}
                            placeholder="Insert Step Here"
                            autoSize maxLength={200}
                            style={{ background: "#69643100" }}
                        />
                    </Form.Item>
                </Form.Item>
                */}
                <Form.List name="steps">
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item required={false} key={field.key}>
                                    <div>
                                        <Form.Item
                                            {...field}
                                            validateTrigger={[
                                                "onChange",
                                                "onBlur"
                                            ]}
                                            rules={[
                                                {
                                                    required: true,
                                                    whitespace: true,
                                                    message:
                                                        "Please insert a step or delete this field."
                                                }
                                            ]}
                                        >
                                            <TextArea
                                                className={styles.input}
                                                placeholder={
                                                    "Step " + (index + 1)
                                                }
                                                autoSize
                                                maxLength={200}
                                                style={{
                                                    background: "#69643100"
                                                }}
                                            />
                                        </Form.Item>
                                        {fields.length > 0 ? (
                                            <MinusCircleOutlined
                                                className={styles.deleteButton}
                                                onClick={() =>
                                                    remove(field.name)
                                                }
                                            />
                                        ) : null}
                                    </div>
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    className={styles.addButton}
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{
                                        width: "60%"
                                    }}
                                >
                                    + ADD STEPS
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item className={styles.save}>
                    <Button className={styles.saveButton} htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form.Item>
        </Form>
    );
};

export default MethodAdder;
