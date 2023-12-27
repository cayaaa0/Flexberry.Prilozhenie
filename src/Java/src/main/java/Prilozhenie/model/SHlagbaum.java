package Prilozhenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Шлагбаум
 */
@Entity(name = "IISPrilozhenieШлагбаум")
@Table(schema = "public", name = "Шлагбаум")
public class SHlagbaum {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "Положение")
    private String положение;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Parkomat")
    @Convert("Parkomat")
    @Column(name = "Паркомат", length = 16, unique = true, nullable = false)
    private UUID _parkomatid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Parkomat", insertable = false, updatable = false)
    private Parkomat parkomat;


    public SHlagbaum() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public String getПоложение() {
      return положение;
    }

    public void setПоложение(String положение) {
      this.положение = положение;
    }


}