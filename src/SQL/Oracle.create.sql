



CREATE TABLE "Автомобиль"
(

	"primaryKey" RAW(16) NOT NULL,

	"ГосНомер" NVARCHAR2(255) NULL,

	"Водитель" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Терминал"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерТер" NUMBER(10) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"Парковка" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗапОбУсл"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВремяНачала" NVARCHAR2(255) NULL,

	"ДатаНачала" DATE NULL,

	"ВремяОкон" NVARCHAR2(255) NULL,

	"ДатаОкон" DATE NULL,

	"СтатОпл" NVARCHAR2(14) NULL,

	"ВремяОплаты" NVARCHAR2(255) NULL,

	"Автомобиль" RAW(16) NOT NULL,

	"ПаркМесто" RAW(16) NOT NULL,

	"Услуга" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПаркМесто"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Статус" NVARCHAR2(8) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Парковка"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомПарковки" NUMBER(10) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Паркомат"
(

	"primaryKey" RAW(16) NOT NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"НомерПарк" NUMBER(10) NULL,

	"Услуга" RAW(16) NOT NULL,

	"Парковка" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Услуга"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерУсл" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(17) NULL,

	"Длительность" NVARCHAR2(255) NULL,

	"Стоимость" NVARCHAR2(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Водитель"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерВод" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Шлагбаум"
(

	"primaryKey" RAW(16) NOT NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"Положение" NVARCHAR2(6) NULL,

	"Парковка" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Автомобиль"
	ADD CONSTRAINT "Автомобиль_FВ_6039" FOREIGN KEY ("Водитель") REFERENCES "Водитель" ("primaryKey");

CREATE INDEX "Автомобиль_IВо_132" on "Автомобиль" ("Водитель");

ALTER TABLE "Терминал"
	ADD CONSTRAINT "Терминал_FПар_9351" FOREIGN KEY ("Парковка") REFERENCES "Парковка" ("primaryKey");

CREATE INDEX "Терминал_IПар_3896" on "Терминал" ("Парковка");

ALTER TABLE "ЗапОбУсл"
	ADD CONSTRAINT "ЗапОбУсл_FАвт_6743" FOREIGN KEY ("Автомобиль") REFERENCES "Автомобиль" ("primaryKey");

CREATE INDEX "ЗапОбУсл_IАвт_5319" on "ЗапОбУсл" ("Автомобиль");

ALTER TABLE "ЗапОбУсл"
	ADD CONSTRAINT "ЗапОбУсл_FПар_7676" FOREIGN KEY ("ПаркМесто") REFERENCES "ПаркМесто" ("primaryKey");

CREATE INDEX "ЗапОбУсл_IПар_4924" on "ЗапОбУсл" ("ПаркМесто");

ALTER TABLE "ЗапОбУсл"
	ADD CONSTRAINT "ЗапОбУсл_FУсл_8105" FOREIGN KEY ("Услуга") REFERENCES "Услуга" ("primaryKey");

CREATE INDEX "ЗапОбУсл_IУслуга" on "ЗапОбУсл" ("Услуга");

ALTER TABLE "Паркомат"
	ADD CONSTRAINT "Паркомат_FУсл_3861" FOREIGN KEY ("Услуга") REFERENCES "Услуга" ("primaryKey");

CREATE INDEX "Паркомат_IУслуга" on "Паркомат" ("Услуга");

ALTER TABLE "Паркомат"
	ADD CONSTRAINT "Паркомат_FПар_4773" FOREIGN KEY ("Парковка") REFERENCES "Парковка" ("primaryKey");

CREATE INDEX "Паркомат_IПарк_71" on "Паркомат" ("Парковка");

ALTER TABLE "Шлагбаум"
	ADD CONSTRAINT "Шлагбаум_FПар_4478" FOREIGN KEY ("Парковка") REFERENCES "Парковка" ("primaryKey");

CREATE INDEX "Шлагбаум_IПарк_618" on "Шлагбаум" ("Парковка");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


