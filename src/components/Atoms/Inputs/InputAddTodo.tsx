import style from './style';

interface InputAddTodoProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
}

const InputAddTodo: React.FC<InputAddTodoProps> = ({
  input,
  setInput,
  inputRef,
}) => {
  const handlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <input
      className={style.input}
      type="text"
      placeholder="Create new task:"
      value={input}
      onChange={handlInputChange}
      ref={inputRef}
    />
  );
};

export default InputAddTodo;
