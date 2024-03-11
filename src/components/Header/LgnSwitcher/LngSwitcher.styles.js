import { useMemo } from 'react';
import { useMedia } from '../../../hooks';
import '../../../styles/_colors.scss';

export const useSelectStyles = () => {
  const mediaRuls = useMedia();
  const { isMobile } = mediaRuls;
  return useMemo(
    () => ({
      control: (baseStyles) => ({
        ...baseStyles,
        padding: '0 11.65px',
        cursor: 'pointer',
        width: 68,
        height: 50,
        borderRadius: 201,
        border: '1.01px solid rgba(43, 42, 41, 0.2)',
      }),
      valueContainer: (baseStyles) => ({
        ...baseStyles,
        padding: 0,
        margin: 0,
      }),
      input: () => {
        return { display: 'none' };
      },
      singleValue: () => ({
        fontWeight: 'normal',
        lineHeight: 1,
        letterSpacing: '-0.01em',
        color: '#014631',
        textTransform: 'uppercase',
        marginRight: 6,
      }),
      indicatorsContainer: (baseStyles) => ({
        ...baseStyles,
        alignSelf: 'center',
        width: 17,
        height: 17,
      }),
      dropdownIndicator: (baseStyles) => ({
        ...baseStyles,
        color: '#014631',
        padding: 0,
        alignSelf: 'center',
        width: '100%',
        height: '100%',
      }),
      indicatorSeparator: () => null,
      menuList: (baseStyles) => ({
        ...baseStyles,

        border: '10.07px solid #e1f4ee',
        borderRadius: 20,
        boxShadow: null,
        background: '$snowdrift',
        padding: '12px 21px',
        overflow: 'hidden',
        width: 194,
        height: 122,
      }),
      option: (baseStyles) => ({
        ...baseStyles,
        padding: '4px 24px',
        marginBottom: 12,
        fontWeight: 'normal',
        lineHeight: 1.5,
        backgroundColor: 'none',
        color: '#014631',
        textTransform: 'uppercase',
      }),
    }),
    [isMobile]
  );
};
