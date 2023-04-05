import { Checkbox, createStyles, px } from '@mantine/core';

const useStyles = createStyles((theme) => {
  const shadowGradientAlpha = theme.colorScheme === 'dark' ? 0.5 : 0.05;
  return {
    root: {
      position: 'sticky',
      width: 0,
      left: 0,
      background: 'inherit',
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: -px(theme.spacing.sm),
        bottom: 0,
        borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
        width: theme.spacing.sm,
        background: `linear-gradient(to right, ${theme.fn.rgba(theme.black, shadowGradientAlpha)}, ${theme.fn.rgba(
          theme.black,
          0
        )}), linear-gradient(to right, ${theme.fn.rgba(theme.black, shadowGradientAlpha)}, ${theme.fn.rgba(
          theme.black,
          0
        )} 30%)`,
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity .15s ease',
      },
    },
    shadowVisible: {
      '&::after': {
        opacity: 1,
      },
    },
    checkboxInput: {
      cursor: 'pointer',
    },
  };
});

type DataTableHeaderSelectorCellProps = {
  shadowVisible: boolean;
  checked: boolean;
  indeterminate: boolean;
  onChange: (() => void) | undefined;
};

export default function DataTableHeaderSelectorCell({
  shadowVisible,
  checked,
  indeterminate,
  onChange,
}: DataTableHeaderSelectorCellProps) {
  const { cx, classes } = useStyles();
  return (
    <th className={cx(classes.root, { [classes.shadowVisible]: shadowVisible })}>
      <Checkbox
        classNames={{ input: classes.checkboxInput }}
        checked={checked}
        indeterminate={indeterminate}
        disabled={!onChange}
        onChange={onChange}
      />
    </th>
  );
}