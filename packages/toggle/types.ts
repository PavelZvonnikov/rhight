declare module '@rhight/toggle' {
  export interface IToggle {
    /** variable value of switcher */
    checked: boolean;
    /** handler of switcher */
    onChange: (newValue: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    /** disable switcher */
    isDisabled?: boolean;
    /** label text */
    label?: string;
    /** size of switcher */
    isMobile?: boolean;
  }

  const Toggle: React.FC<IToggle>;
  export default Toggle;
}
