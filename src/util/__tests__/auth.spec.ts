import { hasAnyRoles } from 'util/auth';
import * as TokenModule from '../token';

describe('hasAnyRoles tests', () => {
  test('should return true when empty list', () => {
    const result = hasAnyRoles([]);

    expect(result).toBeTruthy();
  });

  test('should return true when user has given role', () => {
    jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
      exp: 0,
      authorities: ['ROLE_ADMIN', 'ROLE_OPERATOR'],
      user_name: '',
    });

    const result = hasAnyRoles(['ROLE_ADMIN']);

    expect(result).toBeTruthy();
  });

  test('should return false when user does not have given role', () => {
    jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
      exp: 0,
      authorities: ['ROLE_ADMIN'],
      user_name: '',
    });

    const result = hasAnyRoles(['ROLE_OPERATOR']);

    expect(result).toBeFalsy();
  });


});
