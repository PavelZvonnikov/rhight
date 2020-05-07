declare module '@rhight/toggle' {
  export interface IToggle {
    /** variable value of checkbox */
    checked: boolean;
    /** handler of checkbox */
    onChange: (newValue: boolean) => void;
    /** disable checkbox */
    isDisabled?: boolean;
    /** label text */
    label?: string;
    /** type of checkbox */
    type?: string;
  }

  const Toggle: React.FC<IToggle>;
  export default Toggle;
}
