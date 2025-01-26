Here’s a full overview of your schemas and the new tables we defined, including their purpose, relationships, and relevant details:

---

### **Schemas Overview**

#### **1. `public` Schema**

This is the main schema that houses core entities such as `relationships`, `relationship_partners`, and lookup tables like `relationship_stages` and `breakup_reasons`.

#### **2. `love_preferences_choices` Schema**

This schema contains lookup tables related to love preferences (e.g., distance preferences).

---

### **Defined Tables**

#### **Public Schema Tables**

##### **1. `relationships`**

Stores metadata about relationships, such as their stage, distance, participants, and breakup details.

- **Columns**:

  - `id`: Unique ID for the relationship.
  - `stage_id`: Foreign key to `relationship_stages` (e.g., "Casual", "Serious").
  - `distance_id`: Foreign key to `love_preferences_choices.distance_preference_choices` for relationship distance (e.g., "Local").
  - `number_of_people`: Total participants in the relationship.
  - `start_date`: Start date of the relationship.
  - `end_date`: End date of the relationship (NULL if ongoing).
  - `breakup_reason_id`: Foreign key to `breakup_reasons` (e.g., "Cheating").
  - `created_at`: Timestamp when the relationship was created.
  - `updated_at`: Timestamp of the last update (managed by a trigger).

- **Relationships**:
  - References `relationship_stages` and `breakup_reasons` for metadata.
  - Links to participants via `relationship_partners`.

---

##### **2. `relationship_partners`**

Links users to their relationships, allowing for monogamous and polygamous relationships.

- **Columns**:
  - `id`: Unique ID for the record.
  - `relationship_id`: Foreign key to `relationships`.
  - `user_id`: Foreign key to `users` in the `public` schema.
- **Relationships**:
  - Allows multiple users to participate in the same relationship.
  - Ensures unique pairs using a `UNIQUE (relationship_id, user_id)` constraint.

---

##### **3. `relationship_stages`**

Lookup table defining valid relationship stages.

- **Columns**:

  - `id`: Unique ID for the stage.
  - `value`: The name of the stage (e.g., "Casual", "Serious").
  - `description`: Optional explanation of the stage.

- **Sample Data**:
  ```sql
  ('Casual', 'A casual relationship without commitment'),
  ('Hookup', 'A short-term relationship focused on physical intimacy'),
  ('Serious', 'A committed and long-term relationship'),
  ('Open', 'A non-monogamous relationship where partners can date others'),
  ('Other', 'Other').
  ```

---

##### **4. `breakup_reasons`**

Lookup table for predefined breakup reasons.

- **Columns**:

  - `id`: Unique ID for the reason.
  - `value`: The name of the reason (e.g., "Cheating").
  - `description`: Optional explanation or details about the reason.

- **Sample Data**:
  ```sql
  ('Communication Issues', 'Breakup due to poor communication'),
  ('Cheating', 'Breakup due to infidelity'),
  ('Grew Apart', 'Partners grew apart over time'),
  ('Long-Distance Challenges', 'Breakup due to difficulties in maintaining a long-distance relationship'),
  ('Financial Disagreements', 'Breakup due to financial conflicts'),
  ('Family Issues', 'Breakup due to family-related problems'),
  ('Mutual Decision', 'Breakup due to mutual agreement'),
  ('Other', 'Other').
  ```

---

#### **Love Preferences Choices Schema Tables**

##### **1. `distance_preference_choices`**

Defines human-readable categories for relationship distances.

- **Columns**:

  - `id`: Unique ID for the distance preference.
  - `value`: The name of the distance preference (e.g., "Local").
  - `description`: Optional explanation or details about the preference.

- **Sample Data**:
  ```sql
  ('Local', 'Prefers partners in the same city or within a short commute'),
  ('Nearby', 'Prefers partners within the same region or neighboring cities'),
  ('Far', 'Open to partners within the same country or a few hours of travel'),
  ('Anywhere', 'Open to long-distance relationships across countries or continents').
  ```

---

### **Relationships Between Tables**

#### **Core Table Relationships**

- `relationships.stage_id` → `relationship_stages.id`
- `relationships.breakup_reason_id` → `breakup_reasons.id`
- `relationships.distance_id` → `love_preferences_choices.distance_preference_choices.id`
- `relationship_partners.relationship_id` → `relationships.id`
- `relationship_partners.user_id` → `users.user_id`

---

### **Key Features**

1. **Support for Monogamous and Polygamous Relationships**:

   - The `relationship_partners` table allows multiple users to be linked to the same relationship.

2. **Standardized Metadata**:

   - Lookup tables (`relationship_stages`, `breakup_reasons`, and `distance_preference_choices`) ensure consistency and extensibility for relationship details.

3. **Automatic Timestamp Updates**:

   - The `updated_at` column in `relationships` is automatically updated via a trigger whenever the record is modified.

4. **Query Efficiency**:
   - Predefined foreign key relationships ensure efficient joins and filtering by stages, breakup reasons, and distance preferences.

---

### **Example Queries**

#### Fetch All Relationships for a User

```sql
SELECT
  r.id AS relationship_id,
  rs.value AS stage,
  dp.value AS distance,
  r.number_of_people,
  r.start_date,
  r.end_date,
  br.value AS breakup_reason,
  r.created_at,
  r.updated_at
FROM public.relationship_partners rp
JOIN public.relationships r ON rp.relationship_id = r.id
LEFT JOIN public.relationship_stages rs ON r.stage_id = rs.id
LEFT JOIN love_preferences_choices.distance_preference_choices dp ON r.distance_id = dp.id
LEFT JOIN public.breakup_reasons br ON r.breakup_reason_id = br.id
WHERE rp.user_id = 'user-uuid-1';
```

#### Fetch All Partners in a Relationship

```sql
SELECT
  rp.relationship_id,
  u.user_id,
  u.first_name,
  u.last_name
FROM public.relationship_partners rp
JOIN public.users u ON rp.user_id = u.user_id
WHERE rp.relationship_id = 1; -- Replace with the relationship ID
```

---

Let me know if you’d like further clarifications or adjustments!
