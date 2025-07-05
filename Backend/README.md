# User Registration Endpoint

## POST `/users/register`

Registers a new user in the system.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

#### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Responses

- **201 Created**
  - User registered successfully.
  - Returns: `{ "token": "jwt_token", "user": { ...userData } }`

- **400 Bad Request**
  - Validation failed (e.g., missing fields, invalid email, short password).
  - Returns: `{ "errors": [ ... ] }`

- **500 Internal Server Error**
  - Unexpected server error.

### Notes

- All required fields must be provided.
- The password is securely hashed before storage.
- The response includes a JWT token for authentication.

# User Login Endpoint

## POST `/users/login`

Authenticates a user and returns a JWT token.

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

#### Example

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Responses

- **200 OK**
  - Login successful.
  - Returns: `{ "token": "jwt_token", "user": { ...userData } }`

- **400 Bad Request**
  - Validation failed (e.g., missing fields, invalid email, short password).
  - Returns: `{ "errors": [ ... ] }`

- **401 Unauthorized**
  - Invalid email or password.
  - Returns: `{ "message": "invalied email or password" }`

- **500 Internal Server Error**
  - Unexpected server error.

### Notes

- All required fields must be provided.
- The response includes a JWT token for authentication.

# User Profile Endpoint

## GET `/users/profile`

Retrieves the authenticated user's profile information.

### Headers
```
Authorization: Bearer <jwt_token>
```

### Responses

- **200 OK**
  - Profile retrieved successfully.
  - Returns: `{ "user": { ...userData } }`

- **401 Unauthorized**
  - No token provided or invalid token.
  - Returns: `{ "message": "Authentication required" }`

- **500 Internal Server Error**
  - Unexpected server error.

# User Logout Endpoint

## POST `/users/logout`

Logs out the current user by invalidating their token.

### Headers
```
Authorization: Bearer <jwt_token>
```

### Responses

- **200 OK**
  - Logout successful.
  - Returns: `{ "message": "Logged out successfully" }`

- **401 Unauthorized**
  - No token provided or invalid token.
  - Returns: `{ "message": "Authentication required" }`

- **500 Internal Server Error**
  - Unexpected server error.

### Notes

- Requires a valid JWT token in the Authorization header.
- After logout, the token will be invalidated and can't be used for future requests.

# Captain Routes

## POST `/captains/register`

Register a new captain in the system.

### Request Body

```jsonc
{
  "fullname": {
    "firstname": "string", // min 3 chars, required
    "lastname": "string"   // optional
  },
  "email": "string",    // valid email format, required
  "password": "string", // min 6 chars, required
  "vehicle": {
    "color": "string",      // min 3 chars, required
    "plate": "string",      // min 3 chars, required
    "capacity": "number",   // min 1, required
    "vehicleType": "string" // must be 'car', 'bike', or 'auto-rickshaw'
  }
}
```

### Responses

- **201 Created**
  - Captain registered successfully
  - Returns: `{ "token": "jwt_token", "captain": { ...captainData } }`

- **400 Bad Request**
  - Validation errors
  - Returns: `{ "errors": [ ... ] }`

- **401 Conflict**
  - Returns: `{ "message": "Captain already exists" }`

## POST `/captains/login`

Authenticate a captain.

### Request Body

```jsonc
{
  "email": "string",    // valid email format, required
  "password": "string"  // min 6 chars, required
}
```

### Responses

- **200 OK**
  - Returns: `{ "token": "jwt_token", "captain": { ...captainData } }`

- **400 Bad Request**
  - Returns: `{ "errors": [ ... ] }`

- **401 Unauthorized**
  - Returns: `{ "message": "Invalid email or password" }`

## GET `/captains/profile`

Get captain's profile information.

### Headers
```
Authorization: Bearer <jwt_token>
```

### Responses

- **200 OK**
  - Returns: `{ ...captainData }`

- **401 Unauthorized**
  - Returns: `{ "message": "Authentication required" }`

## GET `/captains/logout`

Logout captain and invalidate token.

### Headers
```
Authorization: Bearer <jwt_token>
```

### Responses

- **200 OK**
  - Returns: `{ "message": "Logged out successfully" }`

- **401 Unauthorized**
  - Returns: `{ "message": "Authentication required" }`
