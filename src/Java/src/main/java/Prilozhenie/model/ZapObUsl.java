package Prilozhenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЗапОбУсл
 */
@Entity(name = "IISPrilozhenieЗапОбУсл")
@Table(schema = "public", name = "ЗапОбУсл")
public class ZapObUsl {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВремяНачала")
    private String времяначала;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ВремяОкон")
    private String времяокон;

    @Column(name = "ДатаОкон")
    private Date датаокон;

    @Column(name = "СтатОпл")
    private String статопл;

    @Column(name = "ВремяОплаты")
    private String времяоплаты;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Avtomobil")
    @Convert("Avtomobil")
    @Column(name = "Автомобиль", length = 16, unique = true, nullable = false)
    private UUID _avtomobilid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Avtomobil", insertable = false, updatable = false)
    private Avtomobil avtomobil;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ParkMesto")
    @Convert("ParkMesto")
    @Column(name = "ПаркМесто", length = 16, unique = true, nullable = false)
    private UUID _parkmestoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ParkMesto", insertable = false, updatable = false)
    private ParkMesto parkmesto;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Usluga")
    @Convert("Usluga")
    @Column(name = "Услуга", length = 16, unique = true, nullable = false)
    private UUID _uslugaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Usluga", insertable = false, updatable = false)
    private Usluga usluga;


    public ZapObUsl() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getВремяНачала() {
      return времяначала;
    }

    public void setВремяНачала(String времяначала) {
      this.времяначала = времяначала;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public String getВремяОкон() {
      return времяокон;
    }

    public void setВремяОкон(String времяокон) {
      this.времяокон = времяокон;
    }

    public Date getДатаОкон() {
      return датаокон;
    }

    public void setДатаОкон(Date датаокон) {
      this.датаокон = датаокон;
    }

    public String getСтатОпл() {
      return статопл;
    }

    public void setСтатОпл(String статопл) {
      this.статопл = статопл;
    }

    public String getВремяОплаты() {
      return времяоплаты;
    }

    public void setВремяОплаты(String времяоплаты) {
      this.времяоплаты = времяоплаты;
    }


}