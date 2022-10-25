export interface boxT {
  backgroundColor: string;
  borderColor: string;
}
export interface strengthStateT {
  name: string;

  box1: {
    backgroundColor: string;
    borderColor: string;
  };
  box2: {
    backgroundColor: string;
    borderColor: string;
  };
  box3: {
    backgroundColor: string;
    borderColor: string;
  };
  box4: {
    backgroundColor: string;
    borderColor: string;
  };
}

export interface strengthActionT {
  type: string;
}

export interface PasswordInputT {
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface sliderT {
  charNum: number;
  setCharNum: React.Dispatch<React.SetStateAction<number>>;
}

export interface checkboxesT {
  upperCase: boolean;
  setUpperCase: React.Dispatch<React.SetStateAction<boolean>>;
  lowerCase: boolean;
  setLowerCase: React.Dispatch<React.SetStateAction<boolean>>;
  numbers: boolean;
  setNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  symbols: boolean;
  setSymbols: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface strengthGaugeT {
  strengthSetting: number;
}

export interface buttonT {
  generate: () => void;
}
