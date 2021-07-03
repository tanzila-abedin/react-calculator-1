import Button from './Button';

const buttonGroups = {
  group_1: ['AC', '+/-', '%', '/'],
  group_2: ['7', '8', '9', 'X'],
  group_3: ['4', '5', '6', '-'],
  group_4: ['1', '2', '3', '+'],
  group_5: ['0', '.', '='],
};

const ButtonPanel = () => (
  <div>
    <div>
      {buttonGroups.group_1.map((button) => <Button key={button} buttonName={button} />)}
    </div>
    <div>
      {buttonGroups.group_2.map((button) => <Button key={button} buttonName={button} />)}
    </div>
    <div>
      {buttonGroups.group_3.map((button) => <Button key={button} buttonName={button} />)}
    </div>
    <div>
      {buttonGroups.group_4.map((button) => <Button key={button} buttonName={button} />)}
    </div>
    <div>
      {buttonGroups.group_5.map((button) => <Button key={button} buttonName={button} />)}
    </div>
  </div>
);

export default ButtonPanel;
