/* ── Search — Advanced Higher Computing Science ────────────── */
(function () {
  /* Determine root prefix the same way nav.js does */
  const ROOT = (function () {
    const depth = document.documentElement.dataset.depth || '0';
    return '../'.repeat(parseInt(depth, 10));
  })();

  /* ── Search Index ────────────────────────────────────────── */
  const INDEX = [

    /* ── Integration: Analysis ─── */
    { term: 'Analysis', desc: 'Identifying purpose, functional requirements, feasibility, planning and UML use case diagrams', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Purpose', desc: 'A plain-language statement of what the solution will do — identified during analysis', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Functional requirements', desc: 'What the solution must do, defined in terms of inputs, processes and outputs', page: 'integration/analysis.html', section: 'INT' },
    { term: 'End-user requirements', desc: 'What the people using the solution expect from it — max six allowed in the project', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Requirements specification', desc: 'Document detailing end-user requirements, scope, boundaries, constraints and functional requirements — often the basis of a legal contract', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Scope', desc: 'What the project must cover, including its deliverables', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Boundaries', desc: 'What the project will not cover — the limits of the development', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Constraints', desc: 'Restrictions on the development — technical, business, economic or political', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Feasibility study', desc: 'Research to determine if a project is achievable: economic, time, legal and technical feasibility', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Economic feasibility', desc: 'Can the project be completed within budget? Includes cost-benefit analysis', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Time feasibility', desc: 'Can the project be completed in the time available? (Also called schedule feasibility)', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Legal feasibility', desc: 'Can the solution be created without breaking laws such as GDPR or licensing agreements?', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Technical feasibility', desc: 'Does the technology needed for the solution exist and is it available?', page: 'integration/analysis.html', section: 'INT' },
    { term: 'User survey', desc: 'Questionnaire capturing the experience of existing or target users to shape requirements', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Gantt chart', desc: 'Horizontal bar chart used to schedule the tasks and resources of a project over time', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Scheduling', desc: 'Planning when each task of a project happens and in what order', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Resources (planning)', desc: 'The people, hardware and software each development stage needs — identified during planning', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Cost-benefit analysis', desc: 'Comparing the costs of acquiring, installing and maintaining a system against its tangible benefits', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Use case diagram', desc: 'UML diagram showing actors, use cases and the relationships between them', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Actor', desc: 'A person or external system that interacts with the system in a use case diagram', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Primary actor', desc: 'An actor that uses the system to achieve a goal — placed on the left of the system boundary', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Secondary actor', desc: 'An actor that supports the system in delivering a goal — placed on the right of the system boundary', page: 'integration/analysis.html', section: 'INT' },
    { term: 'System boundary', desc: 'Rectangle on a use case diagram containing all the use cases of the system', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Include relationship', desc: '<<include>> — a mandatory use case that always runs as part of its base use case', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Extend relationship', desc: '<<extend>> — an optional use case that only runs when certain criteria are met', page: 'integration/analysis.html', section: 'INT' },
    { term: 'Generalisation', desc: 'Inheritance between actors or use cases — the descendant inherits from the ancestor', page: 'integration/analysis.html', section: 'INT' },
    { term: 'UML', desc: 'Unified Modelling Language — standard notation for modelling systems (use case and class diagrams)', page: 'integration/analysis.html', section: 'INT' },

    /* ── Integration: Testing ─── */
    { term: 'Component testing', desc: 'Testing individual modules as they are developed (SDD only) — uses stubs and drivers', page: 'integration/testing.html', section: 'INT' },
    { term: 'Integrative testing', desc: 'Testing that separately developed components work correctly when connected — may need temporary code', page: 'integration/testing.html', section: 'INT' },
    { term: 'Usability testing', desc: 'Testing based on prototypes with personas, test cases and scenarios', page: 'integration/testing.html', section: 'INT' },
    { term: 'Persona', desc: 'Fictional but realistic profile of a target user, used to focus usability testing', page: 'integration/testing.html', section: 'INT' },
    { term: 'Final testing', desc: 'Testing the finished solution against the functional requirements before handover', page: 'integration/testing.html', section: 'INT' },
    { term: 'End-user testing', desc: 'Representative users test the finished solution to confirm it meets their needs', page: 'integration/testing.html', section: 'INT' },
    { term: 'Temporary code', desc: 'Extra code added purely to prove an integrative test, then removed once the test passes', page: 'integration/testing.html', section: 'INT' },
    { term: 'Stub', desc: 'A dummy module standing in for one that is not yet written during component testing', page: 'integration/testing.html', section: 'INT' },
    { term: 'Driver', desc: 'Code written to call and test a module during component testing', page: 'integration/testing.html', section: 'INT' },
    { term: 'Tables match design', desc: 'DDD-specific test — SQL-implemented tables are checked against the data dictionary', page: 'integration/testing.html', section: 'INT' },

    /* ── Integration: Evaluation ─── */
    { term: 'Evaluation', desc: 'Judging a solution against fitness for purpose, maintainability and robustness', page: 'integration/evaluation.html', section: 'INT' },
    { term: 'Fitness for purpose', desc: 'The solution meets all of its functional requirements following testing', page: 'integration/evaluation.html', section: 'INT' },
    { term: 'Maintainability', desc: 'How easily a solution can be changed after handover — corrective, adaptive and perfective', page: 'integration/evaluation.html', section: 'INT' },
    { term: 'Corrective maintenance', desc: 'Fixing errors found after release so the solution meets its original specification', page: 'integration/evaluation.html', section: 'INT' },
    { term: 'Adaptive maintenance', desc: 'Changing a solution in response to changes in its environment, e.g. a new operating system', page: 'integration/evaluation.html', section: 'INT' },
    { term: 'Perfective maintenance', desc: 'Improving a solution by adding new features requested by users', page: 'integration/evaluation.html', section: 'INT' },
    { term: 'Robustness', desc: 'The solution copes with errors during execution without crashing', page: 'integration/evaluation.html', section: 'INT' },
    { term: 'Efficiency', desc: 'SDD-only criterion — how well the code uses processor time, memory and constructs', page: 'integration/evaluation.html', section: 'INT' },
    { term: 'Usability', desc: 'SDD-only criterion at AH — how easy the solution is to learn, use and remember', page: 'integration/evaluation.html', section: 'INT' },
    { term: 'Accuracy of output', desc: 'DDD-only criterion — queries return exactly the data asked for', page: 'integration/evaluation.html', section: 'INT' },

    /* ── SDD: Design ─── */
    { term: 'Structure diagram', desc: 'Hierarchy of modules with data flow — at AH may include 2D arrays and objects', page: 'sdd/design.html', section: 'SDD' },
    { term: 'Pseudocode', desc: 'Language-independent design showing top-level design, data flow and refinements', page: 'sdd/design.html', section: 'SDD' },
    { term: 'Top-level design', desc: 'The main steps of the program, numbered, before refinement', page: 'sdd/design.html', section: 'SDD' },
    { term: 'Refinement', desc: 'Breaking a top-level step into numbered sub-steps (e.g. 3.1, 3.2)', page: 'sdd/design.html', section: 'SDD' },
    { term: 'Data flow', desc: 'The variables and structures passed in and out of each module', page: 'sdd/design.html', section: 'SDD' },
    { term: 'Class diagram', desc: 'UML diagram showing class name, instance variables, methods, visibility and inheritance', page: 'sdd/design.html', section: 'SDD' },
    { term: 'UML class diagram', desc: 'Models the static structure of an OO program — classes, sub-classes and their members', page: 'sdd/design.html', section: 'SDD' },
    { term: 'Public and private', desc: 'Visibility of class members on a UML diagram: + means public, − means private', page: 'sdd/design.html', section: 'SDD' },
    { term: 'Wireframe', desc: 'User-interface design showing visual layout, inputs, validation, underlying processes and outputs', page: 'sdd/design.html', section: 'SDD' },
    { term: 'User-interface design', desc: 'Wireframe annotated with inputs, validation, underlying processes and outputs', page: 'sdd/design.html', section: 'SDD' },

    /* ── SDD: Data Structures ─── */
    { term: '2D array', desc: 'A grid of values of one data type, accessed with two indices: array[row][column]', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Record', desc: 'A collection of named fields that can each hold a different data type (Higher recap)', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Array of records', desc: 'A list of records — each element accessed by index, each field by name', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Parallel 1D arrays', desc: 'Multiple arrays where the same index links related data (Higher recap)', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Linked list', desc: 'Dynamic data structure — each node stores data and a pointer to the next node', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Single linked list', desc: 'Linked list traversed in one direction only, from HEAD to NULL', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Double linked list', desc: 'Linked list whose nodes also point to the previous node — traversable in both directions', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Node', desc: 'One element of a linked list — stores a data item and pointer(s)', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Head', desc: 'The start of a linked list', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Pointer', desc: 'The address of the next (or previous) node stored inside a linked list node', page: 'sdd/data-structures.html', section: 'SDD' },
    { term: 'Dynamic data structure', desc: 'A structure with no fixed size that grows and shrinks as required, e.g. a linked list', page: 'sdd/data-structures.html', section: 'SDD' },

    /* ── SDD: Object-Oriented Programming ─── */
    { term: 'Object-oriented programming', desc: 'Paradigm that bundles data (properties) and the operations on it (methods) into objects', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Class', desc: 'A blueprint from which objects are created — defines properties and methods', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Object', desc: 'An instance of a class, holding its own values for the instance variables', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Property', desc: 'A piece of data stored by an object — also called an instance variable', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Instance variable', desc: 'A variable belonging to each object created from a class', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Method', desc: 'A subprogram defined inside a class that operates on the object’s data', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Constructor', desc: 'Special method, named after the class, that runs when an object is instantiated', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Instantiation', desc: 'Creating an object from a class using the constructor', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Encapsulation', desc: 'Bundling data and methods into one unit and restricting direct access with private visibility', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Inheritance', desc: 'A sub-class inherits the properties and methods of its super-class', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Sub-class', desc: 'A class that inherits from another class and extends or overrides it', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Polymorphism', desc: 'The same method name behaving differently depending on the class of the object', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Override', desc: 'A sub-class provides its own version of a method inherited from the super-class', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Getter', desc: 'Method that retrieves the value of a private instance variable', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Setter', desc: 'Method that changes the value of a private instance variable', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'Array of objects', desc: 'An array whose elements are objects created from a class', page: 'sdd/oop.html', section: 'SDD' },
    { term: 'THIS', desc: 'Reference-language keyword used inside a method to access the current object’s variables', page: 'sdd/oop.html', section: 'SDD' },

    /* ── SDD: Standard Algorithms ─── */
    { term: 'Binary search', desc: 'Finds a target by repeatedly halving a sorted list — far fewer comparisons than linear search', page: 'sdd/standard-algorithms.html', section: 'SDD' },
    { term: 'Bubble sort', desc: 'Repeatedly swaps adjacent values until the list is sorted — simple but inefficient', page: 'sdd/standard-algorithms.html', section: 'SDD' },
    { term: 'Insertion sort', desc: 'Inserts each value into its correct position among the already-sorted values to its left', page: 'sdd/standard-algorithms.html', section: 'SDD' },
    { term: 'Swapped flag', desc: 'Boolean in bubble sort that ends the algorithm early once a pass makes no swaps', page: 'sdd/standard-algorithms.html', section: 'SDD' },
    { term: 'Algorithm efficiency', desc: 'Comparing algorithms by the number of comparisons, swaps or passes they need', page: 'sdd/standard-algorithms.html', section: 'SDD' },

    /* ── SDD: Database Integration ─── */
    { term: 'Database connection', desc: 'Program code that opens and closes a connection to a database server', page: 'sdd/db-integration.html', section: 'SDD' },
    { term: 'Execute SQL query', desc: 'Running an SQL statement from within a program and retrieving its results', page: 'sdd/db-integration.html', section: 'SDD' },
    { term: 'Format query results', desc: 'Displaying the rows returned by a query as readable program output', page: 'sdd/db-integration.html', section: 'SDD' },

    /* ── DDD: ER Diagrams ─── */
    { term: 'ER diagram', desc: 'Entity-relationship diagram — at AH includes entity type and relationship participation', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Entity', desc: 'A real-world thing the database stores data about — becomes a table', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Attribute', desc: 'A piece of data stored about an entity — a field of the table', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Cardinality', desc: 'How many occurrences of one entity link to another: 1:1, 1:M or M:M (Higher recap)', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Strong entity', desc: 'An entity whose existence does not depend on any other entity — its own primary key identifies it', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Weak entity', desc: 'An entity that depends on one or more owner entities for its existence — shown with a double line', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Owner entity', desc: 'The strong entity that a weak entity depends on', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Relationship participation', desc: 'Whether an entity’s participation in a relationship is mandatory (vertical line) or optional (bold circle)', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Mandatory participation', desc: 'At least one occurrence of the entity must exist before occurrences can be added to the related entity', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Optional participation', desc: 'Occurrences of one entity can be added without existing occurrences in the related entity', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Surrogate key', desc: 'An arbitrary unique value (often auto-increment) added to replace a compound or meaningful key', page: 'ddd/er-diagrams.html', section: 'DDD' },
    { term: 'Compound key', desc: 'Primary key made of two or more attributes — often simplified with a surrogate key at AH', page: 'ddd/er-diagrams.html', section: 'DDD' },

    /* ── DDD: EO Diagrams ─── */
    { term: 'Entity-occurrence diagram', desc: 'Shows real instances of each entity and the links between them — proves cardinality and participation', page: 'ddd/eo-diagrams.html', section: 'DDD' },
    { term: 'Occurrence', desc: 'A single instance of an entity — one row of the eventual table', page: 'ddd/eo-diagrams.html', section: 'DDD' },
    { term: 'Identify participation', desc: 'An occurrence with no links means participation is optional at that end', page: 'ddd/eo-diagrams.html', section: 'DDD' },

    /* ── DDD: Data Dictionaries ─── */
    { term: 'Data dictionary', desc: 'Defines every attribute: key, SQL type, size, required and validation — uses SQL data types at AH', page: 'ddd/data-dictionaries.html', section: 'DDD' },
    { term: 'varchar', desc: 'SQL text type — varchar(size) restricts the number of characters (replaces Higher “text”)', page: 'ddd/data-dictionaries.html', section: 'DDD' },
    { term: 'int', desc: 'SQL whole-number type — Higher’s “number” is split into int and float at AH', page: 'ddd/data-dictionaries.html', section: 'DDD' },
    { term: 'float', desc: 'SQL decimal type — float(size, d) sets total digits and digits after the point', page: 'ddd/data-dictionaries.html', section: 'DDD' },
    { term: 'date', desc: 'SQL date type — format YYYY-MM-DD', page: 'ddd/data-dictionaries.html', section: 'DDD' },
    { term: 'time', desc: 'SQL time type — format hh:mm:ss', page: 'ddd/data-dictionaries.html', section: 'DDD' },
    { term: 'Presence check', desc: 'Validation that a field must contain a value — implemented with NOT NULL', page: 'ddd/data-dictionaries.html', section: 'DDD' },
    { term: 'Restricted choice', desc: 'Validation limiting a field to a list of allowed values — implemented with CHECK … IN', page: 'ddd/data-dictionaries.html', section: 'DDD' },
    { term: 'Field length', desc: 'Validation restricting the number of characters — implemented with varchar(size) or CHECK', page: 'ddd/data-dictionaries.html', section: 'DDD' },
    { term: 'Range check', desc: 'Validation that a value falls between limits — implemented with CHECK and comparison operators', page: 'ddd/data-dictionaries.html', section: 'DDD' },

    /* ── DDD: Query Design ─── */
    { term: 'Query design', desc: 'Planning a query: fields/calculations, tables, search criteria, grouping, having and sort order', page: 'ddd/query-design.html', section: 'DDD' },
    { term: 'Search criteria', desc: 'The conditions a query applies in its WHERE clause', page: 'ddd/query-design.html', section: 'DDD' },
    { term: 'Grouping', desc: 'Collecting rows that share a value so aggregate functions summarise each group', page: 'ddd/query-design.html', section: 'DDD' },
    { term: 'Sort order', desc: 'The field(s) and direction (ASC/DESC) used to order query results', page: 'ddd/query-design.html', section: 'DDD' },
    { term: 'Inner query design', desc: 'A nested design table showing the fields, tables and criteria of a subquery', page: 'ddd/query-design.html', section: 'DDD' },

    /* ── DDD: SQL DDL ─── */
    { term: 'DDL', desc: 'Data Definition Language — SQL statements that create or remove database structure', page: 'ddd/sql-ddl.html', section: 'DDD' },
    { term: 'CREATE DATABASE', desc: 'SQL statement that creates a new, empty database', page: 'ddd/sql-ddl.html', section: 'DDD' },
    { term: 'CREATE TABLE', desc: 'SQL statement defining a table’s fields, data types and constraints', page: 'ddd/sql-ddl.html', section: 'DDD' },
    { term: 'PRIMARY KEY constraint', desc: 'Uniquely identifies each record — single field or compound in a separate clause', page: 'ddd/sql-ddl.html', section: 'DDD' },
    { term: 'FOREIGN KEY constraint', desc: 'Links tables — FOREIGN KEY (field) REFERENCES table(field)', page: 'ddd/sql-ddl.html', section: 'DDD' },
    { term: 'NOT NULL', desc: 'Constraint ensuring a field always contains a value — a presence check', page: 'ddd/sql-ddl.html', section: 'DDD' },
    { term: 'CHECK constraint', desc: 'Ensures all values in a field satisfy a condition — implements range and restricted choice', page: 'ddd/sql-ddl.html', section: 'DDD' },
    { term: 'AUTO_INCREMENT', desc: 'Automatically generates the next unique number when a record is inserted', page: 'ddd/sql-ddl.html', section: 'DDD' },
    { term: 'DROP TABLE', desc: 'Permanently deletes a table and all the data in it', page: 'ddd/sql-ddl.html', section: 'DDD' },
    { term: 'DROP DATABASE', desc: 'Permanently deletes an entire database — cannot be undone', page: 'ddd/sql-ddl.html', section: 'DDD' },

    /* ── DDD: SQL DML ─── */
    { term: 'DML', desc: 'Data Manipulation Language — SQL statements that work with the data itself', page: 'ddd/sql-dml.html', section: 'DDD' },
    { term: 'HAVING', desc: 'Filters grouped results after GROUP BY — WHERE cannot be used with aggregate functions', page: 'ddd/sql-dml.html', section: 'DDD' },
    { term: 'Subquery', desc: 'A query in brackets inside the WHERE clause — executes first and passes its result to the main query', page: 'ddd/sql-dml.html', section: 'DDD' },
    { term: 'IN', desc: 'Logical operator matching a value against a list, or against the results of a subquery', page: 'ddd/sql-dml.html', section: 'DDD' },
    { term: 'NOT', desc: 'Logical operator returning records where the condition is not true', page: 'ddd/sql-dml.html', section: 'DDD' },
    { term: 'BETWEEN', desc: 'Logical operator selecting values in an inclusive range — works with numbers and text', page: 'ddd/sql-dml.html', section: 'DDD' },
    { term: 'ANY', desc: 'Returns true if any of the subquery values meet the condition in the main query', page: 'ddd/sql-dml.html', section: 'DDD' },
    { term: 'EXISTS', desc: 'Returns true if the subquery returns one or more records', page: 'ddd/sql-dml.html', section: 'DDD' },
    { term: 'NOT EXISTS', desc: 'Returns records of the main query where the subquery returns no rows', page: 'ddd/sql-dml.html', section: 'DDD' },
    { term: 'GROUP BY', desc: 'Groups rows so aggregate functions return one result per group (Higher recap)', page: 'ddd/sql-dml.html', section: 'DDD' },
    { term: 'Aggregate function', desc: 'COUNT, SUM, AVG, MAX, MIN — summarise a set of rows (Higher recap)', page: 'ddd/sql-dml.html', section: 'DDD' },

    /* ── DDD: SQL Practice ─── */
    { term: 'SQL practice questions', desc: 'Full past-paper style multi-part SQL questions with marking instructions', page: 'ddd/sql-practice.html', section: 'DDD' },

    /* ── DDD: Web Integration ─── */
    { term: 'HTML form', desc: 'Collects user input for server-side processing — action and method attributes', page: 'ddd/web-integration.html', section: 'DDD' },
    { term: 'GET', desc: 'Form method appending data to the URL — visible, bookmarkable, for non-sensitive data', page: 'ddd/web-integration.html', section: 'DDD' },
    { term: 'POST', desc: 'Form method sending data inside the request — hidden, used for sensitive data and database updates', page: 'ddd/web-integration.html', section: 'DDD' },
    { term: 'action attribute', desc: 'Names the file (often .php) executed when the form is submitted', page: 'ddd/web-integration.html', section: 'DDD' },
    { term: 'name and value', desc: 'Form data is sent as name/value pairs — the name must match the server-side variable', page: 'ddd/web-integration.html', section: 'DDD' },
    { term: 'SELECT element', desc: 'HTML drop-down list — its options define the values submitted', page: 'ddd/web-integration.html', section: 'DDD' },
    { term: 'TEXTAREA', desc: 'HTML element for multi-line text input', page: 'ddd/web-integration.html', section: 'DDD' },
    { term: 'Form validation', desc: 'Length, presence and range validation applied to form input', page: 'ddd/web-integration.html', section: 'DDD' },

    /* ── Project ─── */
    { term: 'Project', desc: 'The 80-mark coursework component — analysis, design, implementation, testing and evaluation', page: 'project/index.html', section: 'PROJ' },
  ];

  const SECTION_COLOURS = {
    INT: { bg: '#1B6B45', text: '#fff' },
    SDD: { bg: '#00442A', text: '#fff' },
    DDD: { bg: '#002D1C', text: '#fff' },
    PROJ: { bg: '#92750A', text: '#fff' },
  };

  /* ── Build the search UI ─────────────────────────────────── */
  function init () {
    const wrap = document.getElementById('search-wrap');
    if (!wrap) return;

    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    let activeIndex = -1;
    let results = [];

    function search (query) {
      query = query.trim().toLowerCase();
      if (query.length < 2) { hide(); return; }

      results = INDEX.filter(entry =>
        entry.term.toLowerCase().includes(query) ||
        entry.desc.toLowerCase().includes(query)
      ).slice(0, 10);

      if (results.length === 0) {
        dropdown.innerHTML = '<div class="sd-empty">No results found</div>';
      } else {
        dropdown.innerHTML = results.map((r, i) => {
          const c = SECTION_COLOURS[r.section] || SECTION_COLOURS.SDD;
          const hl = (str) => {
            const re = new RegExp(`(${escapeRe(query)})`, 'gi');
            return str.replace(re, '<mark>$1</mark>');
          };
          return `
            <a class="sd-item" href="${ROOT}${r.page}" data-index="${i}" tabindex="-1">
              <span class="sd-badge" style="background:${c.bg};color:${c.text}">${r.section}</span>
              <span class="sd-text">
                <span class="sd-term">${hl(r.term)}</span>
                <span class="sd-desc">${hl(r.desc)}</span>
              </span>
            </a>`;
        }).join('');
      }

      dropdown.classList.add('open');
      activeIndex = -1;
    }

    function hide () {
      dropdown.classList.remove('open');
      activeIndex = -1;
    }

    function setActive (n) {
      const items = dropdown.querySelectorAll('.sd-item');
      items.forEach(el => el.classList.remove('active'));
      activeIndex = Math.max(-1, Math.min(n, items.length - 1));
      if (activeIndex >= 0) items[activeIndex].classList.add('active');
    }

    function escapeRe (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

    input.addEventListener('input', () => search(input.value));

    input.addEventListener('keydown', (e) => {
      if (!dropdown.classList.contains('open')) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(activeIndex + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(activeIndex - 1); }
      else if (e.key === 'Enter') {
        e.preventDefault();
        const active = dropdown.querySelector('.sd-item.active');
        if (active) active.click();
        else { const first = dropdown.querySelector('.sd-item'); if (first) first.click(); }
      }
      else if (e.key === 'Escape') { hide(); input.blur(); }
    });

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) hide();
    });

    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2) search(input.value);
    });
  }

  /* Run after DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
