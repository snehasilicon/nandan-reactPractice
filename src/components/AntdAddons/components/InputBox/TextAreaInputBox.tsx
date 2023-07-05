import React from "react";
import { Input } from "antd";
import { SplitInputWrapperProps, InputWrapper } from "../../functions";
import { InputBoxProps } from "./interface";
const { TextArea } = Input;

const TextAreaInputBox: React.FC<InputBoxProps> = (props) => {
	const { formProps, inputProps } = SplitInputWrapperProps(props);
	return (
		<InputWrapper {...formProps}>
			<TextArea {...inputProps} rows={4}/>
		</InputWrapper>
	);
};

export default TextAreaInputBox;
