import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';

interface Props
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    ShadowProps {
  children: React.ReactNode;
}

export const Box = styled('div')<Props>(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
);
