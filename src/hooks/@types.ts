export interface UseInputTextErrors<T> {
  errors: T;
}

export interface UseInputText<T> extends Pick<UseInputTextErrors<T>, "errors"> {
  onChange: (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (event: React.FocusEvent<any, Element>) => void;
  clear: () => void;
  updateErrors: (newErrors: { [k: string]: string }) => void;
  updateInitial: (key: string, value: string | number) => void;
}
