import { CommandBarButton, DefaultButton, IButtonProps, IButtonStyles, ICommandBarStyles } from "@fluentui/react";

interface ShareButtonProps extends IButtonProps {
    onClick: () => void;
  }

export const ShareButton: React.FC<ShareButtonProps> = ({onClick}) => {
    const shareButtonStyles: ICommandBarStyles & IButtonStyles = {
        root: {
          width: 86,
          height: 32,
          borderRadius: 4,
          background: '#DC0028',
        //   position: 'absolute',
        //   right: 20,
          padding: '5px 12px',
          marginRight: '20px'
        },
        icon: {
          color: '#FFFFFF',
        },
        rootHovered: {
          background: '#dc0028d0',
        },
        label: {
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '20px',
          color: '#FFFFFF',
        },
      };

      return (
        <CommandBarButton
                styles={shareButtonStyles}
                iconProps={{ iconName: 'Share' }}
                onClick={onClick}
                text="Share"
        />
      )
}

interface HistoryButtonProps extends IButtonProps {
    onClick: () => void;
    text: string;
  }

export const HistoryButton: React.FC<HistoryButtonProps> = ({onClick, text}) => {
    const historyButtonStyles: ICommandBarStyles & IButtonStyles = {
        root: {
            width: '180px',
            border: `1px solid #D1D1D1`,
          },
          rootHovered: {
            border: `1px solid #D1D1D1`,
          },
          rootPressed: {
            border: `1px solid #D1D1D1`,
          },
      };

      return (
        <DefaultButton
            text={text}
            iconProps={{ iconName: 'History' }}
            onClick={onClick}
            styles={historyButtonStyles}
        />
      )
}