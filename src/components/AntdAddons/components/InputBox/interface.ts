import {
	DatePickerProps,
	FormItemProps,
	InputNumberProps,
	InputProps,
	RadioGroupProps,
} from "antd";
import { CheckboxGroupProps } from "antd/lib/checkbox";
import { RangePickerProps } from "antd/lib/date-picker";
import { SelectProps } from "rc-select";

export interface InputOptionListProps {
	list: { [key: string]: string | number }[];
	valueKey?: string;
	textKey?: string | string[];
	rejectedValues?: (string | number)[];
	requiredValues?: (string | number)[];
	separator?: string;
}

export interface InputBoxProps
	extends FormItemProps,
		Omit<InputProps, "name" | "children" | "status" | "onReset"> {}

export interface PasswordInputBoxProps
	extends FormItemProps,
		Omit<InputProps, "name" | "children" | "status" | "onReset"> {}

export interface SelectInputBoxProps
	extends FormItemProps,
		Omit<SelectProps, "name" | "children" | "onReset" | "options"> {
	options: InputOptionListProps;
}

export interface DatePickerInputBoxProps
	extends FormItemProps,
		Omit<DatePickerProps, "name" | "children" | "status" | "onReset"> {}

export interface DateRangePickerInputBoxProps
	extends FormItemProps,
		Omit<RangePickerProps, "name" | "children" | "status" | "onReset"> {}

export interface RadioInputBoxProps
	extends FormItemProps,
		Omit<RadioGroupProps, "name" | "children" | "onReset" | "options"> {
	options: InputOptionListProps;
	type?: "radio" | "button";
}

export interface NumberInputBoxProps
	extends FormItemProps,
		Omit<InputNumberProps, "name" | "children" | "status" | "onReset"> {}

export interface CheckboxInputBoxProps
	extends FormItemProps,
		Omit<CheckboxGroupProps, "name" | "children" | "onReset" | "options"> {
			options: InputOptionListProps;
		}
