import React from "react";

type InputPropsType = {
	currentText: string 
	setCurrentText: (currentText: string) => void 
};

export const Input = (props: InputPropsType) => {
	const {currentText, setCurrentText} = props
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentText(event.currentTarget.value)
	};

	return (
		<input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	);
};
